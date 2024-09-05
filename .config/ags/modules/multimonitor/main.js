import PopupWindow from '../.widgethacks/popupwindow.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
const { Box } = Widget;
import clickCloseRegion from '../.commonwidgets/clickcloseregion.js';
import { setupCursorHover } from "../.widgetutils/cursorhover.js";


const MultiMonitorHeader = () => Widget.CenterBox({
    vertical: false,
    startWidget: Widget.Box({}),
    centerWidget: Widget.Box({
        vertical: true,
        className: "spacing-h-15",
        children: [
            Widget.Box({
                hpack: 'center',
                className: 'spacing-h-5 multimonitor-title',
                children: [
                    Widget.Label({
                        hpack: 'center',
                        css: 'margin-right: 0.682rem;',
                        className: 'txt-title',
                        label: 'Multi Monitor Controller',
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "multimonitor-key txt-small",
                        label: "󰖳",
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "multimonitor-key-notkey txt-small",
                        label: "+",
                    }),
                    Widget.Label({
                        vpack: 'center',
                        className: "multimonitor-key txt-small",
                        label: "U",
                    })
                ]
            }),
        ]
    }),
    endWidget: Widget.Button({
        vpack: 'start',
        hpack: 'end',
        className: "multimonitor-closebtn icon-material txt txt-hugeass",
        onClicked: () => {
            App.closeWindow('multimonitor');
        },
        child: Widget.Label({
            className: 'icon-material txt txt-hugeass',
            label: 'close'
        }),
        setup: setupCursorHover,
    }),
});

export default () => PopupWindow ({
        keymode: 'on-demand',
        name: `multimonitor`,
        layer: 'overlay',
        visible: false,
        // anchor: ['top', 'bottom', 'left', 'right'],
        child: Box({
            vertical: true,
            // clickCloseRegion({ name: 'multimonitor' }),
            children: [
                MultiMonitorHeader(),
                // clickCloseRegion({ name: 'multimonitor' }),
                Widget.Box({
                    css: `
                    background-color: #10131C;
                    min-height: 15rem;
                    min-width: 45rem;
                    border-radius: 8px;
                `
                }),
                // clickCloseRegion({ name: 'multimonitor' }),
            ]
        }),
});

