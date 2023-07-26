# A script for calculating the persistent homology of a given PDB file
# Exports the output into a json file

import typer
from gtda.homology import VietorisRipsPersistence, EuclideanCechPersistence
import numpy as np
from pathlib import Path
from biopandas.pdb import PandasPdb
import json

app = typer.Typer()
ppdb = PandasPdb()

# Calculate the persistent homology of a given PDB file
# Exports into a json file
@app.command()
def calculate_persistence_homology(pdb_file: Path, output_file: Path):
    df = ppdb.read_pdb(str(pdb_file))

    # Extract the coordinates of the atoms
    coordinates = []
    for atom in df.df['ATOM'].iterrows():
        coordinates.append(atom[1][['x_coord', 'y_coord', 'z_coord']].values)

    for atom in df.df['HETATM'].iterrows():
        coordinates.append(atom[1][['x_coord', 'y_coord', 'z_coord']].values)

    coordinates = np.array(coordinates)

    # Calculate the persistent homology
    vr = VietorisRipsPersistence(homology_dimensions=[0, 1, 2])
    diagram = vr.fit_transform(coordinates[None, :, :])[0]
    diagram = diagram.tolist()

    # Export the persistent homology into a json file
    with open(output_file, "w") as f:
        json.dump(diagram, f)

def opposition_homology(protein_coords, ligand_coords):
    if protein_coords is None or ligand_coords is None:
        return None

    def opposition_distance_metric(vec1, vec2):
        if np.abs(vec1[-1] - vec2[-1]) > 2:
            return np.linalg.norm(vec1[:3] - vec2[:3])
        else:
            return np.Inf

    # Append each coordinate with 1 for protein and 2 for ligand
    protein_coords = np.concatenate((protein_coords, np.ones((len(protein_coords), 1))), axis=1)
    ligand_coords = np.concatenate((ligand_coords, 4 * np.ones((len(ligand_coords), 1))), axis=1)

    combined_coords = np.concatenate((protein_coords, ligand_coords), axis=0)
    # Track connected components, loops, and voids
    homology_dimensions = [0, 1, 2]

    # Collapse edges to speed up H2 persistence calculation!
    persistence = VietorisRipsPersistence(
        metric=opposition_distance_metric,
        homology_dimensions=homology_dimensions,
        collapse_edges=True,
        max_edge_length=200
    )

    diagrams_basic = persistence.fit_transform(combined_coords[None, :, :])

    return diagrams_basic

## We'll calculate PW opposition barcode when the animation works and tested on protein-ligand interactions

if __name__ == "__main__":
    app()

