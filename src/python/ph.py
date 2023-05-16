# A script for calculating the persistent homology of a given PDB file
# Exports the output into a json file

import typer
from gtda.homology import VietorisRipsPersistence, EuclideanCechPersistence
import numpy as np
from pathlib import Path
from Bio.PDB import PDBParser
import json

app = typer.Typer()
pdbparser = PDBParser()

# Calculate the persistent homology of a given PDB file
# Exports into a json file
@app.command()
def calculate_persistence_homology(pdb_file: Path, output_file: Path):
    # Load the PDB file
    structure = pdbparser.get_structure("pdb", pdb_file)

    # Extract the coordinates of the atoms
    coordinates = []
    for atom in structure.get_atoms():
        coordinates.append(atom.get_coord())

    coordinates = np.array(coordinates)

    # Calculate the persistent homology
    vr = EuclideanCechPersistence(homology_dimensions=[0, 1, 2])
    diagram = vr.fit_transform(coordinates[None, :, :])[0]
    diagram = diagram.tolist()

    # Export the persistent homology into a json file
    with open(output_file, "w") as f:
        json.dump(diagram, f)

if __name__ == "__main__":
    app()

