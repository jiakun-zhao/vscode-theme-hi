/* eslint perfectionist/sort-objects: "error" */

import type { Colors } from './types'
import { isUndefined } from '@jiakun-zhao/utils'
import chroma from 'chroma-js'
import { accent } from './constants'

function i(color?: string, opacity: number = 100) {
  return isUndefined(color) ? '#0000' : chroma(color).alpha(opacity / 100).hex()
}

const white = '#fff'
const border = '#292929'
const background = '#111'
const foreground = '#aaa'
const foreground2 = '#454545'

export default {
  'activityBarBadge.background': i(accent),
  'activityBarTop.foreground': i(foreground),
  'activityBarTop.inactiveForeground': i(foreground2),
  'breadcrumb.background': i(background),
  'breadcrumb.foreground': i(foreground2),
  'button.background': i(accent, 16),
  'button.border': i(accent, 25),
  'button.foreground': i(accent),
  'editor.background': i(background),
  'editor.inactiveSelectionBackground': i(), //
  'editor.lineHighlightBorder': i(),
  'editor.selectionBackground': i(accent), //
  'editor.selectionHighlightBackground': i(accent, 12), //
  'editor.selectionHighlightBorder': i(accent, 25), //
  'editorBracketMatch.background': i(accent),
  'editorBracketMatch.border': i(),
  'editorGroupHeader.border': i(),
  'editorGroupHeader.tabsBackground': i(background),
  'editorGroupHeader.tabsBorder': i(border),
  'editorIndentGuide.activeBackground': i(accent),
  'editorIndentGuide.background': i(border, 25),
  'editorLineNumber.activeForeground': i(foreground),
  'editorLineNumber.foreground': i(foreground2),
  'editorWidget.background': i(background),
  'editorWidget.border': i(border),
  'focusBorder': i(), // Base colors
  'foreground': i(foreground), // Base colors
  'input.background': i(background),
  'input.border': i(border),
  'list.activeSelectionBackground': i(accent, 16),
  'list.hoverBackground': i(accent, 16),
  'list.inactiveSelectionBackground': i(accent, 16),
  'panel.border': i(border),
  'panelTitle.activeForeground': i(foreground),
  'panelTitle.inactiveForeground': i(foreground2),
  // 'panelTitle.border': i(border),
  'scrollbar.shadow': i(),
  'scrollbarSlider.activeBackground': i(white, 10),
  'scrollbarSlider.background': i(white, 5),
  'scrollbarSlider.hoverBackground': i(white, 10),
  'sideBar.background': i(background),
  'sideBar.border': i(border),
  'sideBarSectionHeader.background': i(),
  'sideBarSectionHeader.border': i(border),
  'statusBar.background': i(background),
  'statusBar.border': i(border),
  'statusBar.foreground': i(foreground2),
  'tab.activeBackground': i(background),
  'tab.activeForeground': i(foreground),
  'tab.inactiveBackground': i(background),
  'tab.inactiveForeground': i(foreground2),
  'textLink.foreground': i(accent),
  'titleBar.activeBackground': i(background),
  'titleBar.border': i(border),
} satisfies Colors
