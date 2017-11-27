// @flow
import React from 'react'
import type { ContentPluginProps } from 'ory-editor-core/lib/service/plugin/classes'
import Display from './Display'
import Form from './Form'
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

export type PropTypes = ContentPluginProps<{ src: string, caption: string }>

const Video = (props: PropTypes) => (
  <MuiThemeProvider theme={createMuiTheme()}>
    <Display {...props} />
  </MuiThemeProvider>
)

export default Video
