import os
import json

VENTTYPES = ["copper","nickel","gold","silver","bismuth","tin","cryolite","zinc","iron"]

PREFIXES = {
    "active_mantle": "kubejs:block/overlay_active",
    "dormant_mantle": "kubejs:block/overlay_inactive"
}

def model_template(vent_type, overlay):
    return {
        "render_type": "minecraft:cutout",
        "display": {
            "gui": {
                "rotation": [30, 225, 0],
                "translation": [0, 0, 0],
                "scale": [0.625, 0.625, 0.625]
            },
            "ground": {
                "rotation": [0, 0, 0],
                "translation": [0, 3, 0],
                "scale": [0.25, 0.25, 0.25]
            },
            "fixed": {
                "rotation": [0, 0, 0],
                "translation": [0, 0, 0],
                "scale": [0.5, 0.5, 0.5]
            },
            "thirdperson_righthand": {
                "rotation": [75, 45, 0],
                "translation": [0, 2.5, 0],
                "scale": [0.375, 0.375, 0.375]
            },
            "firstperson_righthand": {
                "rotation": [0, 45, 0],
                "translation": [0, 0, 0],
                "scale": [0.4, 0.4, 0.4]
            },
            "firstperson_lefthand": {
                "rotation": [0, 225, 0],
                "translation": [0, 0, 0],
                "scale": [0.4, 0.4, 0.4]
            }
        },
        "elements": [
            {
                "from": [0,0,0], "to": [16,16,16],
                "faces": {
                    face: {"texture": "#base", "cullface": face}
                    for face in ["north","south","east","west","up","down"]
                }
            },
            {
                "from": [0,0,0], "to": [16,16,16],
                "faces": {
                    face: {"texture": "#overlay", "cullface": face}
                    for face in ["north","south","east","west","up","down"]
                }
            }
        ],
        "textures": {
            "base": f"kubejs:block/{vent_type}_mantle_ore",
            "overlay": overlay,
            "particle": f"kubejs:block/{vent_type}_mantle_ore"
        }
    }

def blockstate_template(name):
    return {
        "variants": {
            "": { "model": f"create_resource_vents:block/{name}" }
        }
    }

def item_model_template(name):
    return {
        "parent": f"create_resource_vents:block/{name}"
    }

script_dir = os.path.dirname(os.path.abspath(__file__))
model_dir = os.path.join(script_dir, "kubejs", "assets", "create_resource_vents", "models", "block")
item_dir  = os.path.join(script_dir, "kubejs", "assets", "create_resource_vents", "models", "item")
bs_dir    = os.path.join(script_dir, "kubejs", "assets", "create_resource_vents", "blockstates")

os.makedirs(model_dir, exist_ok=True)
os.makedirs(item_dir, exist_ok=True)
os.makedirs(bs_dir, exist_ok=True)

print(f"Running from: {script_dir}")
print(f"Models ->     {model_dir}")
print(f"Items ->      {item_dir}")
print(f"Blockstates -> {bs_dir}")
print()

for vent_type in VENTTYPES:
    for prefix, overlay in PREFIXES.items():
        name = f"{prefix}_{vent_type}_vent"

        model_path = os.path.join(model_dir, f"{name}.json")
        with open(model_path, "w") as f:
            json.dump(model_template(vent_type, overlay), f, indent=2)
        print(f"Generated model:      {name}.json")

        bs_path = os.path.join(bs_dir, f"{name}.json")
        with open(bs_path, "w") as f:
            json.dump(blockstate_template(name), f, indent=2)
        print(f"Generated blockstate: {name}.json")

        item_path = os.path.join(item_dir, f"{name}.json")
        with open(item_path, "w") as f:
            json.dump(item_model_template(name), f, indent=2)
        print(f"Generated item:       {name}.json")

        print()

