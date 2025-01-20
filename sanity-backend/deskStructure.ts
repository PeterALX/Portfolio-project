import { StructureBuilder } from "sanity/structure";

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Portfolio Content')
    .items([
      S.listItem()
        .title('Personal Hero')
        .id('personalHero')
        .child(
          S.document()
            .schemaType('personalHero')
        ),
      S.listItem()
        .title('About Me')
        .id('about')
        .child(
          S.document()
            .schemaType('about')
        ),
      S.listItem()
        .title('Contact Info')
        .id('contactInfo')
        .child(
          S.document()
            .schemaType('contactInfo')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(listItem =>
        !['personalHero', 'about', 'contactInfo'].includes(listItem.getId()!)
      )
    ])
