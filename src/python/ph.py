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

if __name__ == "__main__":
    app()

