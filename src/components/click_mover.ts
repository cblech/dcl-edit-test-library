/*
#DCECOMP{
    "class": "ClickMover",
    "category": "component test library",
    "properties": [
        {
            "name": "direction",
            "type": "vector3",
            "default": [0, 1, 0]
        },
        {
            "name": "multiplier",
            "type": "number",
            "default": 0.5
        }
    ]
}
*/

@Component("ClickMover")
export class ClickMover {
    public multiplier: number = 0.5;
    public direction: Vector3 = Vector3.Up();

    init(entity: Entity) {
        let transform = entity.getComponent(Transform);

        entity.addComponent(new OnPointerDown(()=>{
            transform.position = transform.position.add(this.direction.scale(this.multiplier));
        }))
    }
}

