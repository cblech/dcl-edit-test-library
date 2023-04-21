export type DceScene = {
    /**
     * The root entity of the scene. All entities in this scene are children of either this scene root entity, or of another entity in the scene
     */
    sceneRoot: DceEntity

    /**
     * Shows the scene with all its entities. Shortcut for `sceneRoot.show()`
     */
    show: () => void;

    /**
     * Hides the scene with all its entities. Shortcut for `sceneRoot.hide()`
     */
    hide: () => void
}

export type DceEntity = {
    /**
     * The Decentraland entity
     */
    entity: Entity

    /**
     * The Transform component of the entity. Although, it is not required by Decentraland, every DceEntity will have a Transform added
     */
    transform: Transform

    /**
     * Show this entity and all its children. This calls `engine.addEntity(entity)` internally.
     */
    show: () => void

    /**
     * Hide this entity and all its children. This calls `engine.removeEntity(entity)` internally.
     */
    hide: () => void
}

export type WithGLTFShape = {
    gLTFShape: GLTFShape
}

export type NewScene = DceScene & {
    exposed: {
    }
}
export type CocoBananaTree = DceScene & {
    exposed: {
    }
}

export class SceneFactory {
    /**
     * Creates a new instance of the scene NewScene
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createNewScene(rootEntity: Entity | null = null): NewScene {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const BentPalmTree = new Entity("Bent Palm Tree")
        const BentPalmTreeTransform = new Transform()
        BentPalmTreeTransform.position = new Vector3(0, 0, 0)
        BentPalmTreeTransform.rotation = new Quaternion(0, 0, 0, 1)
        BentPalmTreeTransform.scale = new Vector3(1, 1, 1)
        BentPalmTree.addComponent(BentPalmTreeTransform)
        const BentPalmTreeGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/PalmTree_01/PalmTree_01.glb")
        BentPalmTreeGLTFShape.visible = true
        BentPalmTreeGLTFShape.withCollisions = true
        BentPalmTreeGLTFShape.isPointerBlocker = true
        BentPalmTree.addComponent(BentPalmTreeGLTFShape)

        const Coconut = new Entity("Coconut")
        const CoconutTransform = new Transform()
        CoconutTransform.position = new Vector3(-7.120892, 4.264438, -0.2913392)
        CoconutTransform.rotation = new Quaternion(0.1965108, 0, 0, 0.9805017)
        CoconutTransform.scale = new Vector3(1, 1, 1)
        Coconut.addComponent(CoconutTransform)
        const CoconutGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Coco_01/Coco_01.glb")
        CoconutGLTFShape.visible = true
        CoconutGLTFShape.withCollisions = true
        CoconutGLTFShape.isPointerBlocker = true
        Coconut.addComponent(CoconutGLTFShape)

        const Bananas = new Entity("Bananas")
        const BananasTransform = new Transform()
        BananasTransform.position = new Vector3(-6, 4.084645, 0.3083376)
        BananasTransform.rotation = new Quaternion(-0.1035534, 0.7865661, -0.6035533, -0.07945932)
        BananasTransform.scale = new Vector3(1, 1, 1)
        Bananas.addComponent(BananasTransform)
        const BananasGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Bananas_01/Bananas_01.glb")
        BananasGLTFShape.visible = true
        BananasGLTFShape.withCollisions = true
        BananasGLTFShape.isPointerBlocker = true
        Bananas.addComponent(BananasGLTFShape)

        const Bananas1 = new Entity("Bananas")
        const Bananas1Transform = new Transform()
        Bananas1Transform.position = new Vector3(-6.326407, 4.125696, 0.3307803)
        Bananas1Transform.rotation = new Quaternion(0.1883257, 0.7336329, -0.5826949, 0.2945891)
        Bananas1Transform.scale = new Vector3(1, 1, 1)
        Bananas1.addComponent(Bananas1Transform)
        const Bananas1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Bananas_01/Bananas_01.glb")
        Bananas1GLTFShape.visible = true
        Bananas1GLTFShape.withCollisions = true
        Bananas1GLTFShape.isPointerBlocker = true
        Bananas1.addComponent(Bananas1GLTFShape)

        const Coconut1 = new Entity("Coconut")
        const Coconut1Transform = new Transform()
        Coconut1Transform.position = new Vector3(-7.146574, 4.260781, 0.3300292)
        Coconut1Transform.rotation = new Quaternion(-0.1352066, 0, 0, 0.9908174)
        Coconut1Transform.scale = new Vector3(1, 1, 1)
        Coconut1.addComponent(Coconut1Transform)
        const Coconut1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Coco_01/Coco_01.glb")
        Coconut1GLTFShape.visible = true
        Coconut1GLTFShape.withCollisions = true
        Coconut1GLTFShape.isPointerBlocker = true
        Coconut1.addComponent(Coconut1GLTFShape)

        BentPalmTree.setParent(rootEntity)
        Coconut.setParent(rootEntity)
        Bananas.setParent(rootEntity)
        Bananas1.setParent(rootEntity)
        Coconut1.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
    /**
     * Creates a new instance of the scene CocoBananaTree
     * @param rootEntity specify a root entity for the newly created scene. If null, a new Entity will be generated as the root
     */
    static createCocoBananaTree(rootEntity: Entity | null = null): CocoBananaTree {
        if (rootEntity == null) {
            rootEntity = new Entity()
            const rootEntityTrans = new Transform()
            rootEntity.addComponent(rootEntityTrans)
        } else {
            if (!rootEntity.hasComponent(Transform)) {
                rootEntity.addComponent(new Transform)
            }
        }

        const Bananas = new Entity("Bananas")
        const BananasTransform = new Transform()
        BananasTransform.position = new Vector3(-6, 4.084645, 0.3083376)
        BananasTransform.rotation = new Quaternion(-0.1035534, 0.7865661, -0.6035533, -0.07945932)
        BananasTransform.scale = new Vector3(1, 1, 1)
        Bananas.addComponent(BananasTransform)
        const BananasGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Bananas_01/Bananas_01.glb")
        BananasGLTFShape.visible = true
        BananasGLTFShape.withCollisions = true
        BananasGLTFShape.isPointerBlocker = true
        Bananas.addComponent(BananasGLTFShape)

        const Bananas1 = new Entity("Bananas")
        const Bananas1Transform = new Transform()
        Bananas1Transform.position = new Vector3(-6.326407, 4.125696, 0.3307803)
        Bananas1Transform.rotation = new Quaternion(0.1883257, 0.7336329, -0.5826949, 0.2945891)
        Bananas1Transform.scale = new Vector3(1, 1, 1)
        Bananas1.addComponent(Bananas1Transform)
        const Bananas1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Bananas_01/Bananas_01.glb")
        Bananas1GLTFShape.visible = true
        Bananas1GLTFShape.withCollisions = true
        Bananas1GLTFShape.isPointerBlocker = true
        Bananas1.addComponent(Bananas1GLTFShape)

        const BentPalmTree = new Entity("Bent Palm Tree")
        const BentPalmTreeTransform = new Transform()
        BentPalmTreeTransform.position = new Vector3(0, 0, 0)
        BentPalmTreeTransform.rotation = new Quaternion(0, 0, 0, 1)
        BentPalmTreeTransform.scale = new Vector3(1, 1, 1)
        BentPalmTree.addComponent(BentPalmTreeTransform)
        const BentPalmTreeGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/PalmTree_01/PalmTree_01.glb")
        BentPalmTreeGLTFShape.visible = true
        BentPalmTreeGLTFShape.withCollisions = true
        BentPalmTreeGLTFShape.isPointerBlocker = true
        BentPalmTree.addComponent(BentPalmTreeGLTFShape)

        const Coconut = new Entity("Coconut")
        const CoconutTransform = new Transform()
        CoconutTransform.position = new Vector3(-7.120892, 4.264438, -0.2913392)
        CoconutTransform.rotation = new Quaternion(0.1965108, 0, 0, 0.9805017)
        CoconutTransform.scale = new Vector3(1, 1, 1)
        Coconut.addComponent(CoconutTransform)
        const CoconutGLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Coco_01/Coco_01.glb")
        CoconutGLTFShape.visible = true
        CoconutGLTFShape.withCollisions = true
        CoconutGLTFShape.isPointerBlocker = true
        Coconut.addComponent(CoconutGLTFShape)

        const Coconut1 = new Entity("Coconut")
        const Coconut1Transform = new Transform()
        Coconut1Transform.position = new Vector3(-7.146574, 4.260781, 0.3300292)
        Coconut1Transform.rotation = new Quaternion(-0.1352066, 0, 0, 0.9908174)
        Coconut1Transform.scale = new Vector3(1, 1, 1)
        Coconut1.addComponent(Coconut1Transform)
        const Coconut1GLTFShape = new GLTFShape("dcl-edit/build/builder_assets/Coco_01/Coco_01.glb")
        Coconut1GLTFShape.visible = true
        Coconut1GLTFShape.withCollisions = true
        Coconut1GLTFShape.isPointerBlocker = true
        Coconut1.addComponent(Coconut1GLTFShape)

        Bananas.setParent(rootEntity)
        Bananas1.setParent(rootEntity)
        BentPalmTree.setParent(rootEntity)
        Coconut.setParent(rootEntity)
        Coconut1.setParent(rootEntity)

        engine.addEntity(rootEntity)

        return {
            sceneRoot: {
                entity: rootEntity,
                transform: rootEntity.getComponent(Transform),
                show() { engine.addEntity(this.entity) },
                hide() { engine.removeEntity(this.entity) }
            },
            exposed: {
            },

            show() { this.sceneRoot.show() },
            hide() { this.sceneRoot.hide() }
        }
    }
}
