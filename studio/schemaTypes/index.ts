import {postType} from './postType'
import {projectType} from './projectType'
import {siteSettingsType} from './siteSettingsType'
import {
  imageBlock,
  textBlock,
  linkBlock,
  headingBlock,
  colorBlock,
  spacerBlock,
} from './blockContent'

export const schemaTypes = [
  // Documents
  postType,
  projectType,
  siteSettingsType,
  // Block content types
  imageBlock,
  textBlock,
  linkBlock,
  headingBlock,
  colorBlock,
  spacerBlock,
]
