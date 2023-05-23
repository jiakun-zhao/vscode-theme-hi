import { VitesseThemes } from './colors'
import { getColors, toArray, write } from './utils'
import type { Theme, ThemeInfo } from './types'

const themeInfo: Record<Theme, ThemeInfo> = {
  light: { name: 'Hi Light', base: 'vs' },
  dark: { name: 'Hi Dark', base: 'vs-dark' },
}

for (const [theme, info] of Object.entries(themeInfo) as [Theme, ThemeInfo][]) {
  const pick = (options: Record<Theme, string>) => options[theme]

  const vitesse = (key: keyof typeof VitesseThemes, op = '') =>
    pick({ light: VitesseThemes[key][1] + op, dark: VitesseThemes[key][0] + op })

  const primer = getColors(theme)
  // hi
  // const selectionBackgroundInActive = pick({ light: '#22222208', dark: '#eeeeee08' })
  const selectionBackgroundInActive = pick({ light: '#22222208', dark: '#eeeeee15' })
  // hi
  // const selectionBackground = pick({ light: '#22222215', dark: '#eeeeee15' })
  const selectionBackground = pick({ light: '#22222215', dark: '#ddd2' })

  const data = {
    ...info,

    colors: {

      'focusBorder': '#00000000',
      'foreground': vitesse('foreground'),
      'descriptionForeground': vitesse('secondaryForeground'),
      'errorForeground': vitesse('red'),

      'textLink.foreground': vitesse('primary'),
      'textLink.activeForeground': vitesse('primary'),
      'textBlockQuote.background': vitesse('background'),
      'textBlockQuote.border': vitesse('border'),
      'textCodeBlock.background': vitesse('background'),
      'textPreformat.foreground': primer.gray[6],
      'textSeparator.foreground': primer.gray[3],

      'button.background': vitesse('primary'),
      'button.foreground': vitesse('background'),
      'button.hoverBackground': vitesse('primary'),

      'checkbox.background': vitesse('activeBackground'),
      'checkbox.border': pick({ light: primer.gray[3], dark: primer.gray[1] }),

      'dropdown.background': vitesse('background'),
      'dropdown.border': vitesse('border'),
      'dropdown.foreground': vitesse('foreground'),
      'dropdown.listBackground': vitesse('activeBackground'),

      'input.background': vitesse('activeBackground'),
      'input.border': vitesse('border'),
      'input.foreground': vitesse('foreground'),
      'input.placeholderForeground': vitesse('secondaryForeground'),
      'inputOption.activeBackground': vitesse('ignored'),

      'badge.foreground': vitesse('background'),
      'badge.background': vitesse('secondaryForeground'),

      'progressBar.background': vitesse('primary'),

      'titleBar.activeForeground': vitesse('activeForeground'),
      'titleBar.activeBackground': vitesse('background'),
      'titleBar.inactiveForeground': primer.gray[5],
      'titleBar.inactiveBackground': vitesse('background'),
      // hi
      // 'titleBar.border': vitesse('activeBackground'),
      'titleBar.border': vitesse('border'),

      'activityBar.foreground': vitesse('foreground'),
      'activityBar.inactiveForeground': vitesse('ignored'),
      'activityBar.background': vitesse('background'),
      'activityBarBadge.foreground': vitesse('background'),
      'activityBarBadge.background': vitesse('activeForeground'),
      'activityBar.activeBorder': vitesse('primary'),
      'activityBar.border': vitesse('border'),

      'sideBar.foreground': vitesse('activeForeground'),
      'sideBar.background': vitesse('background'),
      'sideBar.border': vitesse('border'),
      'sideBarTitle.foreground': vitesse('foreground'),
      'sideBarSectionHeader.foreground': vitesse('foreground'),
      'sideBarSectionHeader.background': vitesse('background'),
      'sideBarSectionHeader.border': vitesse('border'),

      'list.hoverForeground': vitesse('foreground'),
      'list.inactiveSelectionForeground': vitesse('foreground'),
      'list.activeSelectionForeground': vitesse('foreground'),
      'list.hoverBackground': vitesse('activeBackground'),
      'list.inactiveSelectionBackground': vitesse('activeBackground'),
      'list.activeSelectionBackground': vitesse('activeBackground'),
      'list.inactiveFocusBackground': vitesse('background'),
      'list.focusBackground': vitesse('activeBackground'),
      'list.highlightForeground': vitesse('primary'),

      'tree.indentGuidesStroke': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'notificationCenterHeader.foreground': primer.gray[5],
      'notificationCenterHeader.background': vitesse('background'),
      'notifications.foreground': vitesse('foreground'),
      'notifications.background': vitesse('background'),
      'notifications.border': vitesse('border'),
      'notificationsErrorIcon.foreground': vitesse('red'),
      'notificationsWarningIcon.foreground': vitesse('orange'),
      'notificationsInfoIcon.foreground': vitesse('blue'),

      'pickerGroup.border': vitesse('border'),
      'pickerGroup.foreground': vitesse('foreground'),
      'quickInput.background': vitesse('background'),
      'quickInput.foreground': vitesse('foreground'),
      'quickInputList.focusBackground': vitesse('activeBackground'),

      'statusBar.foreground': vitesse('activeForeground'),
      'statusBar.background': vitesse('background'),
      'statusBar.border': vitesse('border'),
      'statusBar.noFolderBackground': vitesse('background'),
      'statusBar.debuggingBackground': vitesse('activeBackground'),
      'statusBar.debuggingForeground': vitesse('activeForeground'),
      'statusBarItem.prominentBackground': vitesse('activeBackground'),

      'editorGroupHeader.tabsBackground': vitesse('background'),
      'editorGroupHeader.tabsBorder': vitesse('border'),
      'editorGroup.border': vitesse('border'),

      'tab.activeForeground': vitesse('foreground'),
      'tab.inactiveForeground': primer.gray[5],
      'tab.inactiveBackground': vitesse('background'),
      'tab.activeBackground': vitesse('background'),
      'tab.hoverBackground': vitesse('activeBackground'),
      'tab.unfocusedHoverBackground': vitesse('background'),
      'tab.border': vitesse('border'),
      'tab.unfocusedActiveBorderTop': vitesse('border'),
      'tab.activeBorder': vitesse('border'),
      'tab.unfocusedActiveBorder': vitesse('border'),
      'tab.activeBorderTop': vitesse('secondaryForeground'),

      'breadcrumb.foreground': primer.gray[5],
      'breadcrumb.focusForeground': vitesse('foreground'),
      'breadcrumb.background': vitesse('activeBackground'),
      'breadcrumb.activeSelectionForeground': pick({ light: '#22222215', dark: '#eeeeee15' }),
      'breadcrumbPicker.background': vitesse('background'),

      'editor.foreground': vitesse('foreground'),
      'editor.background': vitesse('background'),
      'editorWidget.background': vitesse('background'),
      'editor.foldBackground': pick({ light: '#22222210', dark: '#eeeeee10' }),
      // hi
      // 'editor.lineHighlightBackground': vitesse('activeBackground'),
      'editor.lineHighlightBackground': '#0000',
      // hi
      'editor.lineHighlightBorder': '#0000',
      'editorLineNumber.foreground': vitesse('ignored'),
      'editorLineNumber.activeForeground': vitesse('activeForeground'),
      'editorIndentGuide.background': pick({ light: '#00000015', dark: '#ffffff15' }),
      'editorIndentGuide.activeBackground': pick({ light: '#00000030', dark: '#ffffff30' }),
      'editorWhitespace.foreground': pick({ light: '#00000015', dark: '#ffffff15' }),
      // 'editorCursor.foreground': vitesse('primary'),

      'editor.findMatchBackground': pick({ light: '#e6cc7744', dark: '#e6cc7722' }),
      'editor.findMatchHighlightBackground': pick({ light: '#e6cc7766', dark: '#e6cc7744' }),
      'editor.inactiveSelectionBackground': selectionBackgroundInActive,
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive,
      // hi
      'editor.selectionHighlightBorder': vitesse('border', '00'),
      'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
      'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

      'diffEditor.insertedTextBackground': pick({ light: '#1c6b4815', dark: '#4d937522' }),
      'diffEditor.removedTextBackground': pick({ light: '#ab595910', dark: '#ab595922' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
      'scrollbarSlider.background': vitesse('faded'),
      'scrollbarSlider.hoverBackground': vitesse('ignored'),
      'scrollbarSlider.activeBackground': vitesse('ignored'),
      'editorOverviewRuler.border': primer.white,

      'panel.background': vitesse('background'),
      'panel.border': vitesse('border'),
      'panelTitle.activeBorder': vitesse('primary'),
      'panelTitle.activeForeground': vitesse('foreground'),
      'panelTitle.inactiveForeground': primer.gray[5],
      'panelInput.border': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'terminal.foreground': vitesse('foreground'),
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': pick({ light: '#aaaaaa', dark: '#777777' }),
      'terminal.ansiBrightBlue': vitesse('blue'),
      'terminal.ansiBrightCyan': vitesse('cyan'),
      'terminal.ansiBrightGreen': vitesse('green'),
      'terminal.ansiBrightMagenta': vitesse('magenta'),
      'terminal.ansiBrightRed': vitesse('red'),
      'terminal.ansiBrightWhite': pick({ light: '#dddddd', dark: '#ffffff' }),
      'terminal.ansiBrightYellow': vitesse('yellow'),
      'terminal.ansiBlack': pick({ light: VitesseThemes.background[0], dark: VitesseThemes.foreground[1] }),
      'terminal.ansiBlue': vitesse('blue'),
      'terminal.ansiCyan': vitesse('cyan'),
      'terminal.ansiGreen': vitesse('green'),
      'terminal.ansiMagenta': vitesse('magenta'),
      'terminal.ansiRed': vitesse('red'),
      'terminal.ansiWhite': pick({ light: VitesseThemes.foreground[0], dark: VitesseThemes.foreground[0] }),
      'terminal.ansiYellow': vitesse('yellow'),

      'gitDecoration.addedResourceForeground': vitesse('green'),
      'gitDecoration.modifiedResourceForeground': vitesse('blue'),
      'gitDecoration.deletedResourceForeground': vitesse('red'),
      'gitDecoration.untrackedResourceForeground': vitesse('cyan'),
      'gitDecoration.ignoredResourceForeground': vitesse('ignored'),
      'gitDecoration.conflictingResourceForeground': vitesse('orange'),
      'gitDecoration.submoduleResourceForeground': vitesse('secondaryForeground'),

      'editorGutter.modifiedBackground': vitesse('blue'),
      'editorGutter.addedBackground': vitesse('green'),
      'editorGutter.deletedBackground': vitesse('red'),

      'editorBracketHighlight.foreground1': vitesse('cyan'),
      'editorBracketHighlight.foreground2': vitesse('green'),
      'editorBracketHighlight.foreground3': vitesse('orange'),
      'editorBracketHighlight.foreground4': vitesse('magenta'),
      'editorBracketHighlight.foreground5': vitesse('yellow'),
      'editorBracketHighlight.foreground6': vitesse('blue'),

      'debugToolBar.background': vitesse('background'),
      'editor.stackFrameHighlightBackground': pick({ light: primer.yellow[1], dark: '#a707' }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: primer.yellow[2], dark: '#b808' }),

      'peekViewEditor.matchHighlightBackground': pick({ light: '#ffd33d33', dark: '#ffd33d33' }),
      'peekViewResult.matchHighlightBackground': pick({ light: '#ffd33d33', dark: '#ffd33d33' }),
      'peekViewEditor.background': vitesse('background'),
      'peekViewResult.background': vitesse('background'),

      'settings.headerForeground': vitesse('foreground'),
      'settings.modifiedItemIndicator': vitesse('primary'),
      'welcomePage.buttonBackground': primer.gray[1],
      'welcomePage.buttonHoverBackground': primer.gray[2],

      'problemsErrorIcon.foreground': vitesse('red'),
      'problemsWarningIcon.foreground': vitesse('orange'),
      'problemsInfoIcon.foreground': vitesse('blue'),

      'editorError.foreground': vitesse('red'),
      // hi
      // 'editorWarning.foreground': vitesse('orange', '0'),
      'editorWarning.foreground': '#0000',
      'editorInfo.foreground': vitesse('blue'),
      'editorHint.foreground': vitesse('green'),

      'editorGutter.commentRangeForeground': vitesse('ignored'),
      'editorGutter.foldingControlForeground': vitesse('secondaryForeground'),

      'editorInlayHint.foreground': vitesse('punctuation'),
      'editorInlayHint.background': '#00000000',

      'editorStickyScroll.background': vitesse('activeBackground'),
      'editorStickyScrollHover.background': vitesse('activeBackground'),

      'menu.separatorBackground': vitesse('border'),
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: vitesse('namespace'),
      property: vitesse('property'),
      interface: vitesse('interface'),
      type: vitesse('interface'),
      class: vitesse('class'),
    },
    tokenColors: [
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
          'string.comment',
        ],
        settings: {
          foreground: vitesse('comment'),
        },
      },
      {
        scope: [
          'delimiter.bracket',
          'delimiter',
          'invalid.illegal.character-not-allowed-here.html',
          'keyword.operator.rest',
          'keyword.operator.spread',
          'keyword.operator.type.annotation',
          'keyword.operator.relational',
          'keyword.operator.assignment',
          'meta.brace',
          'meta.tag.block.any.html',
          'meta.tag.inline.any.html',
          'meta.tag.structure.input.void.html',
          'meta.type.annotation',
          'meta.embedded.block.github-actions-expression',
          'storage.type.function.arrow',
          'keyword.operator.type',
          'meta.objectliteral.ts',
          'punctuation',
        ],
        settings: {
          foreground: vitesse('punctuation'),
        },
      },
      {
        scope: [
          'constant',
          'entity.name.constant',
          'variable.language',
          'meta.definition.variable',
        ],
        settings: {
          foreground: vitesse('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: vitesse('foreground'),
        },
      },
      {
        scope: [
          'entity.name.tag',
          'tag.html',
        ],
        settings: {
          foreground: vitesse('keyword'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: [
          'keyword',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: vitesse('keyword'),
        },
      },
      {
        scope: [
          'storage',
          'storage.type',
          'support.type.builtin',
          'constant.language.undefined',
          'constant.language.null',
        ],
        settings: {
          foreground: vitesse('builtin'),
        },
      },
      {
        scope: [
          'text.html.derivative',
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.java',
        ],
        settings: {
          foreground: vitesse('foreground'),
        },
      },
      {
        scope: [
          'string',
          'string punctuation.section.embedded source',
          'attribute.value',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.support.type.property-name',
        ],
        settings: {
          foreground: vitesse('string', '99'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: [
          'property',
          'meta.property-name',
          'meta.object-literal.key',
          'entity.name.tag.yaml',
          'attribute.name',
        ],
        settings: {
          foreground: vitesse('property'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name',
          'invalid.deprecated.entity.other.attribute-name.html',
        ],
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: [
          'variable',
          'identifier',
        ],
        settings: {
          foreground: vitesse('variable'),
        },
      },
      {
        scope: [
          'support.type.primitive',
          'entity.name.type',
        ],
        settings: {
          foreground: vitesse('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: vitesse('namespace'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment.compound',
          'meta.var.expr.ts',
        ],
        settings: {
          foreground: vitesse('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: vitesse('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: vitesse('yellow'),
        },
      },
      {
        scope: [
          'support.constant',
        ],
        settings: {
          foreground: vitesse('constant'),
        },
      },
      {
        scope: [
          'constant.numeric',
          'number',
        ],
        settings: {
          foreground: vitesse('number'),
        },
      },
      {
        scope: [
          'keyword.other.unit',
        ],
        settings: {
          foreground: vitesse('builtin'),
        },
      },
      {
        scope: [
          'constant.language.boolean',
          'constant.language',
        ],
        settings: {
          foreground: vitesse('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: vitesse('primary'),
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: vitesse('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: vitesse('primary'),
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: vitesse('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: vitesse('foreground'),
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: vitesse('foreground'),
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: vitesse('primary'),
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'constant.other.reference.link',
          'string.other.link',
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
        ],
        settings: {
          foreground: vitesse('string'),
        },
      },
      {
        scope: [
          'markup.underline.link.markdown',
        ],
        settings: {
          foreground: vitesse('secondaryForeground'),
          fontStyle: 'underline',
        },
      },
      {
        scope: [
          'type.identifier',
        ],
        settings: {
          foreground: vitesse('class'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name.html.vue',
        ],
        settings: {
          foreground: vitesse('function'),
        },
      },
      {
        scope: [
          'invalid.illegal.unrecognized-tag.html',
        ],
        settings: {
          fontStyle: 'normal',
        },
      },
    ],
    rules: [],
  }

  const rules: any[] = []

  data.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  data.rules = rules
  await write(theme, data)
}
