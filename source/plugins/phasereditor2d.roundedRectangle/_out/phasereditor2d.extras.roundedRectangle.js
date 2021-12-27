var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            class RoundedRectangle extends Phaser.GameObjects.RenderTexture {
                constructor(scene, x, y, width, height) {
                    super(scene, x, y, width, height);
                    this._fillColor = 0xffffff;
                    this._isFilled = true;
                    this._fillAlpha = 1;
                    this._isStroked = false;
                    this._strokeColor = 0xffffff;
                    this._strokeAlpha = 1;
                    this._lineWidth = 1;
                    this._radius = 20;
                    this._shadowColor = 0;
                    this._shadowAlpha = 0;
                    this._shadowOffsetX = 0;
                    this._shadowOffsetY = 0;
                    this._shadowRadius = -1;
                    this._editorSupport = new roundedRectangle.RoundedRectangleEditorSupport(this, scene);
                }
                getEditorSupport() {
                    return this._editorSupport;
                }
                get shadowColor() {
                    return this._shadowColor;
                }
                set shadowColor(shadowColor) {
                    this._shadowColor = shadowColor;
                    this.redraw();
                }
                get shadowAlpha() {
                    return this._shadowAlpha;
                }
                set shadowAlpha(shadowAlpha) {
                    this._shadowAlpha = shadowAlpha;
                    this.redraw();
                }
                get shadowOffsetX() {
                    return this._shadowOffsetX;
                }
                set shadowOffsetX(shadowOffsetX) {
                    this._shadowOffsetX = shadowOffsetX;
                    this.redraw();
                }
                get shadowOffsetY() {
                    return this._shadowOffsetY;
                }
                set shadowOffsetY(shadowOffsetY) {
                    this._shadowOffsetY = shadowOffsetY;
                    this.redraw();
                }
                get shadowRadius() {
                    return this._shadowRadius;
                }
                set shadowRadius(shadowRadius) {
                    this._shadowRadius = shadowRadius;
                    this.redraw();
                }
                get fillColor() {
                    return this._fillColor;
                }
                set fillColor(fillColor) {
                    this._fillColor = fillColor;
                    this.redraw();
                }
                get isFilled() {
                    return this._isFilled;
                }
                set isFilled(isFilled) {
                    this._isFilled = isFilled;
                    this.redraw();
                }
                get fillAlpha() {
                    return this._fillAlpha;
                }
                set fillAlpha(fillAlpha) {
                    this._fillAlpha = fillAlpha;
                    this.redraw();
                }
                get isStroked() {
                    return this._isStroked;
                }
                set isStroked(isStroked) {
                    this._isStroked = isStroked;
                    this.redraw();
                }
                get strokeColor() {
                    return this._strokeColor;
                }
                set strokeColor(strokeColor) {
                    this._strokeColor = strokeColor;
                    this.redraw();
                }
                get strokeAlpha() {
                    return this._strokeAlpha;
                }
                set strokeAlpha(strokeAlpha) {
                    this._strokeAlpha = strokeAlpha;
                    this.redraw();
                }
                get lineWidth() {
                    return this._lineWidth;
                }
                set lineWidth(lineWidth) {
                    this._lineWidth = lineWidth;
                    this.redraw();
                }
                get radius() {
                    return this._radius;
                }
                set radius(radius) {
                    this._radius = radius;
                    this.redraw();
                }
                setSize(width, height) {
                    super.setSize(width, height);
                    this.redraw();
                    return this;
                }
                redraw() {
                    this.clear();
                    if (this._isFilled || this._isStroked) {
                        const gr = new Phaser.GameObjects.Graphics(this.scene);
                        let x = this._shadowOffsetX < 0 ? -this._shadowOffsetX : 0;
                        let y = this._shadowOffsetY < 0 ? -this._shadowOffsetY : 0;
                        let w = this._shadowOffsetX < 0 ? this.width + this._shadowOffsetX : this.width - this._shadowOffsetX;
                        let h = this._shadowOffsetY < 0 ? this.height + this._shadowOffsetY : this.height - this._shadowOffsetY;
                        if (this._shadowOffsetX !== 0 && this._shadowOffsetY !== 0 && this._shadowAlpha !== 0) {
                            gr.fillStyle(this._shadowColor, this._shadowAlpha);
                            gr.fillRoundedRect(x + this._shadowOffsetX, y + this._shadowOffsetY, w, h, this._shadowRadius === -1 ? this._radius : this._shadowRadius);
                        }
                        if (this._isFilled) {
                            gr.fillStyle(this._fillColor, this._fillAlpha);
                            if (this._isStroked) {
                                x += this.lineWidth / 2;
                                y += this.lineWidth / 2;
                                w -= this.lineWidth;
                                h -= this.lineWidth;
                            }
                            gr.fillRoundedRect(x, y, w, h, this._radius);
                        }
                        if (this._isStroked) {
                            gr.lineStyle(this._lineWidth, this._strokeColor, this._strokeAlpha);
                            gr.strokeRoundedRect(x, y, w, h, this._radius);
                        }
                        this.draw(gr);
                        gr.destroy();
                    }
                }
            }
            roundedRectangle.RoundedRectangle = RoundedRectangle;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            class RoundedRectangleBlockCellRenderer extends phasereditor2d.scene.ui.sceneobjects.ShapeBlockCellRenderer {
                static getInstance() {
                    return this._instance ? this._instance : (this._instance = new RoundedRectangleBlockCellRenderer());
                }
                renderShapeCell(ctx, args) {
                    const size = Math.floor(Math.max(8, Math.floor(Math.min(args.w, args.h) * 0.5)));
                    const x = Math.floor(args.x + (args.w - size) / 2);
                    const y = Math.floor(args.y + (args.h - size) / 2);
                    const r = size <= 16 ? 2 : 8;
                    ctx.beginPath();
                    RoundedRectangleBlockCellRenderer.drawRoundedRect(ctx, x, y, size, size, r, r, r, r);
                    ctx.stroke();
                }
                static drawRoundedRect(ctx, x, y, w, h, topLeft = 5, topRight = 5, bottomRight = 5, bottomLeft = 5) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(x + topLeft, y);
                    ctx.lineTo(x + w - topRight, y);
                    ctx.quadraticCurveTo(x + w, y, x + w, y + topRight);
                    ctx.lineTo(x + w, y + h - bottomRight);
                    ctx.quadraticCurveTo(x + w, y + h, x + w - bottomRight, y + h);
                    ctx.lineTo(x + bottomLeft, y + h);
                    ctx.quadraticCurveTo(x, y + h, x, y + h - bottomLeft);
                    ctx.lineTo(x, y + topLeft);
                    ctx.quadraticCurveTo(x, y, x + topLeft, y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
            roundedRectangle.RoundedRectangleBlockCellRenderer = RoundedRectangleBlockCellRenderer;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            var code = phasereditor2d.scene.core.code;
            var sceneobjects = phasereditor2d.scene.ui.sceneobjects;
            class RoundedRectangleCodeDOMBuilder extends sceneobjects.BaseImageCodeDOMBuilder {
                constructor() {
                    super("roundedRectangle");
                }
                buildCreatePrefabInstanceCodeDOM(args) {
                    const call = args.methodCallDOM;
                    call.arg(args.sceneExpr);
                    this.buildCreatePrefabInstanceCodeDOM_XY_Arguments(args);
                    this.buildCreatePrefabInstanceCodeDOM_Size_Arguments(args);
                }
                buildPrefabConstructorDeclarationCodeDOM(args) {
                    const ctr = args.ctrDeclCodeDOM;
                    ctr.arg("x", "number", true);
                    ctr.arg("y", "number", true);
                    ctr.arg("width", "number", true);
                    ctr.arg("height", "number", true);
                }
                buildPrefabConstructorDeclarationSupperCallCodeDOM(args) {
                    const obj = args.prefabObj;
                    const support = obj.getEditorSupport();
                    const call = args.superMethodCallCodeDOM;
                    this.buildPrefabConstructorDeclarationSupperCallCodeDOM_XYParameters(args);
                    if (support.isUnlockedProperty(sceneobjects.SizeComponent.width)) {
                        call.arg("width ?? " + obj.width);
                        call.arg("height ?? " + obj.height);
                    }
                    else {
                        call.arg("width");
                        call.arg("height");
                    }
                }
                buildCreateObjectWithFactoryCodeDOM(args) {
                    const obj = args.obj;
                    const call = new code.MethodCallCodeDOM("roundedRectangle", args.gameObjectFactoryExpr);
                    call.argFloat(obj.x);
                    call.argFloat(obj.y);
                    call.argFloat(obj.width);
                    call.argFloat(obj.height);
                    return call;
                }
            }
            roundedRectangle.RoundedRectangleCodeDOMBuilder = RoundedRectangleCodeDOMBuilder;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            var controls = colibri.ui.controls;
            class RoundedRectangleCodeResources extends phasereditor2d.scene.core.code.CodeResources {
                constructor() {
                    super(roundedRectangle.RoundedRectanglePlugin.getInstance());
                    for (const spec of ["js", "js-module", "ts", "ts-module"]) {
                        const ext = this.getExt(spec);
                        this.addResource(spec + "/RoundedRectangle", "data/" + spec + "/RoundedRectangle." + ext + ".txt");
                        this.addResource(spec + "/registerRoundedRectangleFactory", "data/" + spec + "/registerRoundedRectangleFactory." + ext + ".txt");
                    }
                    this.addResource("roundedRectangle.d.ts", "data/roundedRectangle.d.ts.txt");
                }
                static getInstance() {
                    return this._instance ? this._instance : (this._instance = new RoundedRectangleCodeResources());
                }
                getExt(spec) {
                    return spec.slice(0, 2);
                }
                async createFiles(spec) {
                    try {
                        const filesView = colibri.Platform.getWorkbench().getActiveWindow()
                            .getView(phasereditor2d.files.ui.views.FilesView.ID);
                        const sel = filesView.getSelection();
                        let folder;
                        if (sel.length > 0) {
                            const file = sel[0];
                            if (file.isFolder()) {
                                folder = file;
                            }
                            else {
                                folder = file.getParent();
                            }
                        }
                        else {
                            alert("Please, select a folder in the Files view.");
                            return;
                        }
                        const dlg = new controls.dialogs.ProgressDialog();
                        dlg.create();
                        dlg.setTitle("Create RoundedRectangle API Files");
                        const monitor = new controls.dialogs.ProgressDialogMonitor(dlg);
                        monitor.addTotal(3);
                        const newFiles = [];
                        const ext = this.getExt(spec);
                        newFiles.push(await this.createFile(spec + "/RoundedRectangle", folder, "RoundedRectangle." + ext));
                        monitor.step();
                        newFiles.push(await this.createFile(spec + "/registerRoundedRectangleFactory", folder, "registerRoundedRectangleFactory." + ext));
                        monitor.step();
                        newFiles.push(await this.createFile("roundedRectangle.d.ts", folder, "roundedRectangle.d.ts"));
                        monitor.step();
                        dlg.close();
                        const viewer = filesView.getViewer();
                        viewer.setExpanded(folder, true);
                        await viewer.repaint();
                        viewer.setSelection(newFiles);
                    }
                    catch (e) {
                        alert("Error: " + e.message);
                    }
                }
            }
            roundedRectangle.RoundedRectangleCodeResources = RoundedRectangleCodeResources;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            var sceneobjects = phasereditor2d.scene.ui.sceneobjects;
            class RoundedRectangleComponent extends sceneobjects.Component {
                constructor(obj) {
                    super(obj, [
                        RoundedRectangleComponent.radius,
                        RoundedRectangleComponent.fillColor,
                        RoundedRectangleComponent.isFilled,
                        RoundedRectangleComponent.fillAlpha,
                        RoundedRectangleComponent.isStroked,
                        RoundedRectangleComponent.strokeColor,
                        RoundedRectangleComponent.strokeAlpha,
                        RoundedRectangleComponent.lineWidth,
                        RoundedRectangleComponent.shadowOffsetX,
                        RoundedRectangleComponent.shadowOffsetY,
                        RoundedRectangleComponent.shadowRadius,
                        RoundedRectangleComponent.shadowColor,
                        RoundedRectangleComponent.shadowAlpha
                    ]);
                }
                buildSetObjectPropertiesCodeDOM(args) {
                    this.buildSetObjectPropertyCodeDOM_BooleanProperty(args, RoundedRectangleComponent.isFilled);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, sceneobjects.NumberColorPropertyCodeDomAdapter(RoundedRectangleComponent.fillColor));
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.fillAlpha);
                    this.buildSetObjectPropertyCodeDOM_BooleanProperty(args, RoundedRectangleComponent.isStroked);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, sceneobjects.NumberColorPropertyCodeDomAdapter(RoundedRectangleComponent.strokeColor));
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.strokeAlpha);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.lineWidth);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.radius);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetX);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowOffsetY);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowRadius);
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, sceneobjects.NumberColorPropertyCodeDomAdapter(RoundedRectangleComponent.shadowColor));
                    this.buildSetObjectPropertyCodeDOM_FloatProperty(args, RoundedRectangleComponent.shadowAlpha);
                }
            }
            RoundedRectangleComponent.fillColor = sceneobjects.NumberColorProperty("fillColor", "#fff", "Fill Color", "The fill color.");
            RoundedRectangleComponent.isFilled = sceneobjects.SimpleProperty("isFilled", true, "Is Filled", "Is filled?");
            RoundedRectangleComponent.fillAlpha = sceneobjects.SimpleProperty("fillAlpha", 1, "Fill Alpha", "The fill alpha.");
            RoundedRectangleComponent.isStroked = sceneobjects.SimpleProperty("isStroked", false, "Is Stroked", "Is stroked?");
            RoundedRectangleComponent.strokeColor = sceneobjects.NumberColorProperty("strokeColor", "#fff", "Stroke Color", "The stroke color.");
            RoundedRectangleComponent.strokeAlpha = sceneobjects.SimpleProperty("strokeAlpha", 1, "Stroke Alpha", "The stroke alpha.");
            RoundedRectangleComponent.lineWidth = sceneobjects.SimpleProperty("lineWidth", 1, "Line Width", "The line width.");
            RoundedRectangleComponent.radius = sceneobjects.SimpleProperty("radius", 0, "Radius", "The radius.");
            RoundedRectangleComponent.shadowColor = sceneobjects.NumberColorProperty("shadowColor", "#000", "Shadow Color", "The shadow color.");
            RoundedRectangleComponent.shadowAlpha = sceneobjects.SimpleProperty("shadowAlpha", 1, "Shadow Alpha", "The shadow alpha.");
            RoundedRectangleComponent.shadowOffsetX = sceneobjects.SimpleProperty("shadowOffsetX", 0, "Shadow Offset X", "The shadow offset in the X axis.");
            RoundedRectangleComponent.shadowOffsetY = sceneobjects.SimpleProperty("shadowOffsetY", 0, "Shadow Offset Y", "The shadow offset in the Y axis.");
            RoundedRectangleComponent.shadowRadius = sceneobjects.SimpleProperty("shadowRadius", -1, "Shadow Radius", "Alternative shadow radius. Set -1 for using the original rectangle radius.");
            roundedRectangle.RoundedRectangleComponent = RoundedRectangleComponent;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            var sceneobjects = phasereditor2d.scene.ui.sceneobjects;
            class RoundedRectangleEditorSupport extends sceneobjects.GameObjectEditorSupport {
                constructor(obj, scene) {
                    super(roundedRectangle.RoundedRectangleExtension.getInstance(), obj, scene);
                    this.addComponent(new sceneobjects.TransformComponent(obj), new sceneobjects.OriginComponent(obj), new sceneobjects.VisibleComponent(obj), new sceneobjects.AlphaSingleComponent(obj), new sceneobjects.SizeComponent(obj), new roundedRectangle.RoundedRectangleComponent(obj));
                }
                setInteractive() {
                    this.getObject().setInteractive();
                }
                getCellRenderer() {
                    return new phasereditor2d.scene.ui.sceneobjects.ObjectCellRenderer();
                }
                computeContentHash() {
                    return this.computeContentHashWithComponent(this.getObject(), roundedRectangle.RoundedRectangleComponent);
                }
            }
            roundedRectangle.RoundedRectangleEditorSupport = RoundedRectangleEditorSupport;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            class RoundedRectangleExtension extends phasereditor2d.scene.ui.sceneobjects.SceneGameObjectExtension {
                constructor() {
                    super({
                        phaserTypeName: "RoundedRectangle",
                        typeName: "RoundedRectangle",
                        category: phasereditor2d.scene.SCENE_OBJECT_SHAPE_CATEGORY,
                        icon: phasereditor2d.scene.ScenePlugin.getInstance().getIconDescriptor(phasereditor2d.scene.ICON_BUILD) // RoundedRectanglePlugin.getInstance().getIconDescriptor(ICON_NINEPATCH)
                    });
                }
                static getInstance() {
                    return this._instance ? this._instance : (this._instance = new RoundedRectangleExtension());
                }
                getBlockCellRenderer() {
                    return roundedRectangle.RoundedRectangleBlockCellRenderer.getInstance();
                }
                acceptsDropData(data) {
                    return false;
                }
                createSceneObjectWithAsset(args) {
                    // not supported
                    return null;
                }
                createGameObjectWithData(args) {
                    const obj = new roundedRectangle.RoundedRectangle(args.scene, 0, 0, 50, 50);
                    obj.getEditorSupport().readJSON(args.data);
                    return obj;
                }
                async getAssetsFromObjectData(args) {
                    return [];
                }
                getCodeDOMBuilder() {
                    return new roundedRectangle.RoundedRectangleCodeDOMBuilder();
                }
                createDefaultSceneObject(args) {
                    const obj = new roundedRectangle.RoundedRectangle(args.scene, args.x, args.y, 100, 100);
                    obj.redraw();
                    return [obj];
                }
            }
            roundedRectangle.RoundedRectangleExtension = RoundedRectangleExtension;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            roundedRectangle.CAT_ROUNDED_RECTANGLE = "phasereditor2d.roundedRectangle.category";
            roundedRectangle.CMD_CREATE_ROUNDED_USER_FILES = "phasereditor2d.roundedRectangle.CreateRoundedRectangleUserFiles";
            class RoundedRectanglePlugin extends colibri.Plugin {
                constructor() {
                    super("phasereditor2d.roundedRectangle");
                }
                static getInstance() {
                    return this._instance;
                }
                registerExtensions(reg) {
                    // reg.addExtension(colibri.ui.ide.IconLoaderExtension.withPluginFiles(this, [
                    //     ICON_NINEPATCH
                    // ]));
                    reg.addExtension(roundedRectangle.RoundedRectangleExtension.getInstance());
                    reg.addExtension(new phasereditor2d.scene.ui.editor.properties.SceneEditorPropertySectionExtension(page => new roundedRectangle.RoundedRectangleSection(page)));
                    reg.addExtension(new colibri.ui.ide.PluginResourceLoaderExtension(() => roundedRectangle.RoundedRectangleCodeResources.getInstance().preload()));
                    reg.addExtension(new colibri.ui.ide.commands.CommandExtension(manager => {
                        manager.addCategory({
                            id: roundedRectangle.CAT_ROUNDED_RECTANGLE,
                            name: "Rounded Rectangle",
                        });
                        for (const spec of ["js", "js-module", "ts", "ts-module"]) {
                            manager.add({
                                command: {
                                    id: roundedRectangle.CMD_CREATE_ROUNDED_USER_FILES + "." + spec,
                                    category: roundedRectangle.CAT_ROUNDED_RECTANGLE,
                                    name: `Create Rounded Rectangle User Files (${spec})`,
                                    tooltip: "Create the user files with the RoundedRectangle API."
                                },
                                handler: {
                                    executeFunc: args => {
                                        roundedRectangle.RoundedRectangleCodeResources.getInstance().createFiles(spec);
                                    }
                                }
                            });
                        }
                    }));
                }
            }
            RoundedRectanglePlugin._instance = new RoundedRectanglePlugin();
            roundedRectangle.RoundedRectanglePlugin = RoundedRectanglePlugin;
            colibri.Platform.addPlugin(RoundedRectanglePlugin.getInstance());
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
var phasereditor2d;
(function (phasereditor2d) {
    var extras;
    (function (extras) {
        var roundedRectangle;
        (function (roundedRectangle) {
            class RoundedRectangleSection extends phasereditor2d.scene.ui.sceneobjects.SceneGameObjectSection {
                constructor(page) {
                    super(page, RoundedRectangleSection.SECTION_ID, "Rounded Rectangle", false, false);
                }
                createForm(parent) {
                    const comp = this.createGridElement(parent);
                    comp.style.gridTemplateColumns = "auto auto 1fr auto";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.radius)
                        .style.gridColumn = "3 / span 2";
                    this.createPropertyBoolean(comp, roundedRectangle.RoundedRectangleComponent.isFilled)
                        .checkElement.style.gridColumn = "3 / span 2";
                    this.createPropertyColorRow(comp, roundedRectangle.RoundedRectangleComponent.fillColor, false)
                        .element.style.gridColumn = "3 / span 2";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.fillAlpha)
                        .style.gridColumn = "3 / span 2";
                    this.createPropertyBoolean(comp, roundedRectangle.RoundedRectangleComponent.isStroked)
                        .checkElement.style.gridColumn = "3 / span 2";
                    this.createPropertyColorRow(comp, roundedRectangle.RoundedRectangleComponent.strokeColor, false)
                        .element.style.gridColumn = "3 / span 2";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.strokeAlpha)
                        .style.gridColumn = "3 / span 2";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.lineWidth)
                        .style.gridColumn = "3 / span 2";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.shadowOffsetX)
                        .style.gridColumn = "3 / span 2";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.shadowOffsetY)
                        .style.gridColumn = "3 / span 2";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.shadowRadius)
                        .style.gridColumn = "3 / span 2";
                    this.createPropertyColorRow(comp, roundedRectangle.RoundedRectangleComponent.shadowColor, false)
                        .element.style.gridColumn = "3 / span 2";
                    this.createPropertyFloatRow(comp, roundedRectangle.RoundedRectangleComponent.shadowAlpha)
                        .style.gridColumn = "3 / span 2";
                }
                canEdit(obj, n) {
                    return obj instanceof roundedRectangle.RoundedRectangle;
                }
                canEditNumber(n) {
                    return n > 0;
                }
            }
            RoundedRectangleSection.SECTION_ID = "phasereditor2d.roundedRectangle.RoundedRectangleSection";
            roundedRectangle.RoundedRectangleSection = RoundedRectangleSection;
        })(roundedRectangle = extras.roundedRectangle || (extras.roundedRectangle = {}));
    })(extras = phasereditor2d.extras || (phasereditor2d.extras = {}));
})(phasereditor2d || (phasereditor2d = {}));
