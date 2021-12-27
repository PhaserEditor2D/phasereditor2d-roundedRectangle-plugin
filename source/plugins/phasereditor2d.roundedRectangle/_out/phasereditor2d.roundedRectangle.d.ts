declare namespace phasereditor2d.roundedRectangle {
    class RoundedRectangle extends Phaser.GameObjects.RenderTexture implements scene.ui.sceneobjects.ISceneGameObject {
        private _editorSupport;
        private _fillColor;
        private _isFilled;
        private _fillAlpha;
        private _isStroked;
        private _strokeColor;
        private _strokeAlpha;
        private _lineWidth;
        private _radius;
        private _shadowColor;
        private _shadowAlpha;
        private _shadowOffsetX;
        private _shadowOffsetY;
        private _shadowRadius;
        constructor(scene: scene.ui.Scene, x: number, y: number, width: number, height: number);
        getEditorSupport(): RoundedRectangleEditorSupport;
        get shadowColor(): number;
        set shadowColor(shadowColor: number);
        get shadowAlpha(): number;
        set shadowAlpha(shadowAlpha: number);
        get shadowOffsetX(): number;
        set shadowOffsetX(shadowOffsetX: number);
        get shadowOffsetY(): number;
        set shadowOffsetY(shadowOffsetY: number);
        get shadowRadius(): number;
        set shadowRadius(shadowRadius: number);
        get fillColor(): number;
        set fillColor(fillColor: number);
        get isFilled(): boolean;
        set isFilled(isFilled: boolean);
        get fillAlpha(): number;
        set fillAlpha(fillAlpha: number);
        get isStroked(): boolean;
        set isStroked(isStroked: boolean);
        get strokeColor(): number;
        set strokeColor(strokeColor: number);
        get strokeAlpha(): number;
        set strokeAlpha(strokeAlpha: number);
        get lineWidth(): number;
        set lineWidth(lineWidth: number);
        get radius(): number;
        set radius(radius: number);
        setSize(width: number, height: number): this;
        redraw(): void;
    }
}
declare namespace phasereditor2d.roundedRectangle {
    import controls = colibri.ui.controls;
    class RoundedRectangleBlockCellRenderer extends scene.ui.sceneobjects.ShapeBlockCellRenderer {
        static _instance: RoundedRectangleBlockCellRenderer;
        static getInstance(): RoundedRectangleBlockCellRenderer;
        protected renderShapeCell(ctx: CanvasRenderingContext2D, args: controls.viewers.RenderCellArgs): void;
        static drawRoundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, topLeft?: number, topRight?: number, bottomRight?: number, bottomLeft?: number): void;
    }
}
declare namespace phasereditor2d.roundedRectangle {
    import code = phasereditor2d.scene.core.code;
    import sceneobjects = phasereditor2d.scene.ui.sceneobjects;
    class RoundedRectangleCodeDOMBuilder extends sceneobjects.BaseImageCodeDOMBuilder {
        constructor();
        buildCreatePrefabInstanceCodeDOM(args: sceneobjects.IBuildPrefabConstructorCodeDOMArgs): void;
        buildPrefabConstructorDeclarationCodeDOM(args: sceneobjects.IBuildPrefabConstructorDeclarationCodeDOM): void;
        buildPrefabConstructorDeclarationSupperCallCodeDOM(args: sceneobjects.IBuildPrefabConstructorDeclarationSupperCallCodeDOMArgs): void;
        buildCreateObjectWithFactoryCodeDOM(args: sceneobjects.IBuildObjectFactoryCodeDOMArgs): code.MethodCallCodeDOM;
    }
}
declare namespace phasereditor2d.roundedRectangle {
    class RoundedRectangleCodeResources extends scene.core.code.CodeResources {
        private static _instance;
        static getInstance(): RoundedRectangleCodeResources;
        private constructor();
        private getExt;
        createFiles(spec: "js" | "js-module" | "ts" | "ts-module"): Promise<void>;
    }
}
declare namespace phasereditor2d.roundedRectangle {
    import sceneobjects = scene.ui.sceneobjects;
    class RoundedRectangleComponent extends sceneobjects.Component<RoundedRectangle> {
        static fillColor: sceneobjects.IProperty<any>;
        static isFilled: sceneobjects.IProperty<any>;
        static fillAlpha: sceneobjects.IProperty<any>;
        static isStroked: sceneobjects.IProperty<any>;
        static strokeColor: sceneobjects.IProperty<any>;
        static strokeAlpha: sceneobjects.IProperty<any>;
        static lineWidth: sceneobjects.IProperty<any>;
        static radius: sceneobjects.IProperty<any>;
        static shadowColor: sceneobjects.IProperty<any>;
        static shadowAlpha: sceneobjects.IProperty<any>;
        static shadowOffsetX: sceneobjects.IProperty<any>;
        static shadowOffsetY: sceneobjects.IProperty<any>;
        static shadowRadius: sceneobjects.IProperty<any>;
        constructor(obj: RoundedRectangle);
        buildSetObjectPropertiesCodeDOM(args: sceneobjects.ISetObjectPropertiesCodeDOMArgs): void;
    }
}
declare namespace phasereditor2d.roundedRectangle {
    import sceneobjects = phasereditor2d.scene.ui.sceneobjects;
    class RoundedRectangleEditorSupport extends sceneobjects.GameObjectEditorSupport<RoundedRectangle> {
        constructor(obj: RoundedRectangle, scene: scene.ui.Scene);
        setInteractive(): void;
        getCellRenderer(): colibri.ui.controls.viewers.ICellRenderer;
        computeContentHash(): string;
    }
}
declare namespace phasereditor2d.roundedRectangle {
    class RoundedRectangleExtension extends scene.ui.sceneobjects.SceneGameObjectExtension {
        private static _instance;
        static getInstance(): RoundedRectangleExtension;
        constructor();
        getBlockCellRenderer(): RoundedRectangleBlockCellRenderer;
        acceptsDropData(data: any): boolean;
        createSceneObjectWithAsset(args: scene.ui.sceneobjects.ICreateWithAssetArgs): scene.ui.sceneobjects.ISceneGameObject;
        createGameObjectWithData(args: scene.ui.sceneobjects.ICreateWithDataArgs): scene.ui.sceneobjects.ISceneGameObject;
        getAssetsFromObjectData(args: scene.ui.sceneobjects.IGetAssetsFromObjectArgs): Promise<any[]>;
        getCodeDOMBuilder(): scene.ui.sceneobjects.GameObjectCodeDOMBuilder;
        createDefaultSceneObject(args: scene.ui.sceneobjects.ICreateDefaultArgs): scene.ui.sceneobjects.ISceneObject[];
    }
}
declare namespace phasereditor2d.roundedRectangle {
    const CAT_ROUNDED_RECTANGLE = "phasereditor2d.roundedRectangle.category";
    const CMD_CREATE_ROUNDED_USER_FILES = "phasereditor2d.roundedRectangle.CreateRoundedRectangleUserFiles";
    class RoundedRectanglePlugin extends colibri.Plugin {
        private static _instance;
        static getInstance(): RoundedRectanglePlugin;
        constructor();
        registerExtensions(reg: colibri.ExtensionRegistry): void;
    }
}
declare namespace phasereditor2d.roundedRectangle {
    import controls = colibri.ui.controls;
    class RoundedRectangleSection extends scene.ui.sceneobjects.SceneGameObjectSection<RoundedRectangle> {
        static SECTION_ID: string;
        constructor(page: controls.properties.PropertyPage);
        createForm(parent: HTMLDivElement): void;
        canEdit(obj: any, n: number): boolean;
        canEditNumber(n: number): boolean;
    }
}
//# sourceMappingURL=phasereditor2d.roundedRectangle.d.ts.map