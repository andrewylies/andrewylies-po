import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myStudioProjectId, myStudioApiDataset} from './src/environment'

export default defineConfig({
  name: 'default',
  title: 'andrewylies-po',

  projectId: myStudioProjectId,
  dataset: myStudioApiDataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
