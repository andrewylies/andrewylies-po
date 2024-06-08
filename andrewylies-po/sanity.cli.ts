import {defineCliConfig} from 'sanity/cli'
import {myStudioProjectId, myStudioApiDataset} from './src/environment'

export default defineCliConfig({
  api: {
    projectId: myStudioProjectId,
    dataset: myStudioApiDataset,
  }
})
