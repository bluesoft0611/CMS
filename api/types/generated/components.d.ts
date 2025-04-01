import type { Schema, Struct } from '@strapi/strapi';

export interface CardSection2Card extends Struct.ComponentSchema {
  collectionName: 'components_card_section2_cards';
  info: {
    description: '';
    displayName: 'Section2-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardSection3Card extends Struct.ComponentSchema {
  collectionName: 'components_card_section3_cards';
  info: {
    displayName: 'Section3-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CardSection4Card extends Struct.ComponentSchema {
  collectionName: 'components_card_section4_cards';
  info: {
    displayName: 'Section4-Card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardSection5Card extends Struct.ComponentSchema {
  collectionName: 'components_card_section5_cards';
  info: {
    displayName: 'Section5-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardSection6Card1 extends Struct.ComponentSchema {
  collectionName: 'components_card_section6_card1s';
  info: {
    displayName: 'Section6-Card1';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardSection6Card2 extends Struct.ComponentSchema {
  collectionName: 'components_card_section6_card2s';
  info: {
    displayName: 'Section6-Card2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CardSection7Card extends Struct.ComponentSchema {
  collectionName: 'components_card_section7_cards';
  info: {
    displayName: 'Section7-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardSection8Card extends Struct.ComponentSchema {
  collectionName: 'components_card_section8_cards';
  info: {
    displayName: 'Section8-Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    contact: Schema.Attribute.String;
    description: Schema.Attribute.String;
    fields: Schema.Attribute.Component<'contact.contact-field', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactField extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_fields';
  info: {
    displayName: 'Contact Field';
  };
  attributes: {
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    options: Schema.Attribute.JSON;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'email', 'select', 'textarea']>;
  };
}

export interface NavigationArticle extends Struct.ComponentSchema {
  collectionName: 'components_navigation_articles';
  info: {
    description: '';
    displayName: 'article';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavigationColumnSection extends Struct.ComponentSchema {
  collectionName: 'components_navigation_column_sections';
  info: {
    displayName: 'columnSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'navigation.sub-link', true>;
  };
}

export interface NavigationMenu extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menus';
  info: {
    description: '';
    displayName: 'Menu';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menuItems: Schema.Attribute.Component<'navigation.menu-item', true>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'menuItem';
  };
  attributes: {
    label: Schema.Attribute.String;
    subMenu1: Schema.Attribute.Component<'navigation.sub-menu-columns', true>;
    subMenu2: Schema.Attribute.Component<'navigation.sub-menu2', true>;
    subMenu3: Schema.Attribute.Component<'navigation.sub-nav-grid', true>;
    subMenuType: Schema.Attribute.Enumeration<
      ['subMenu1', 'subMenu2', 'subMenu3']
    >;
    url: Schema.Attribute.String;
  };
}

export interface NavigationSubLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_links';
  info: {
    displayName: 'subLink';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface NavigationSubMenuColumns extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_menu_columns';
  info: {
    description: '';
    displayName: 'subMenu1';
  };
  attributes: {
    featured: Schema.Attribute.Component<'navigation.sub-link', true>;
    sections: Schema.Attribute.Component<'navigation.column-section', true>;
  };
}

export interface NavigationSubMenu2 extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_menu2s';
  info: {
    description: '';
    displayName: 'subMenu2';
  };
  attributes: {
    articles: Schema.Attribute.Component<'navigation.article', true>;
  };
}

export interface NavigationSubNavGrid extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_nav_grids';
  info: {
    description: '';
    displayName: 'subMenu3';
  };
  attributes: {
    articles: Schema.Attribute.Component<'navigation.article', true>;
    featured: Schema.Attribute.Component<'navigation.sub-link', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    description: '';
    displayName: 'section';
  };
  attributes: {
    content: Schema.Attribute.JSON;
    type: Schema.Attribute.Enumeration<['hero', 'textBlock', 'form', 'topBar']>;
  };
}

export interface SectionSection1 extends Struct.ComponentSchema {
  collectionName: 'components_section_section1s';
  info: {
    displayName: 'Section1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionSection2 extends Struct.ComponentSchema {
  collectionName: 'components_section_section2s';
  info: {
    description: '';
    displayName: 'Section2';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.section2-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionSection3 extends Struct.ComponentSchema {
  collectionName: 'components_section_section3s';
  info: {
    displayName: 'Section3';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.section3-card', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionSection4 extends Struct.ComponentSchema {
  collectionName: 'components_section_section4s';
  info: {
    displayName: 'Section4';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.section4-card', true>;
    cardTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionSection5 extends Struct.ComponentSchema {
  collectionName: 'components_section_section5s';
  info: {
    displayName: 'Section5';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.section5-card', true>;
    description: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionSection6 extends Struct.ComponentSchema {
  collectionName: 'components_section_section6s';
  info: {
    displayName: 'Section6';
  };
  attributes: {
    description: Schema.Attribute.Text;
    featureCards: Schema.Attribute.Component<'card.section6-card2', true>;
    numberedCards: Schema.Attribute.Component<'card.section6-card1', true>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionSection7 extends Struct.ComponentSchema {
  collectionName: 'components_section_section7s';
  info: {
    displayName: 'Section7';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.section7-card', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionSection8 extends Struct.ComponentSchema {
  collectionName: 'components_section_section8s';
  info: {
    displayName: 'Section8';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.section8-card', true>;
    description: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionSection9 extends Struct.ComponentSchema {
  collectionName: 'components_section_section9s';
  info: {
    displayName: 'Section9';
  };
  attributes: {
    description: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SocialSocial extends Struct.ComponentSchema {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface TopBarTopBar extends Struct.ComponentSchema {
  collectionName: 'components_top_bar_top_bars';
  info: {
    description: '';
    displayName: 'topBar';
  };
  attributes: {
    Social: Schema.Attribute.Component<'social.social', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.section2-card': CardSection2Card;
      'card.section3-card': CardSection3Card;
      'card.section4-card': CardSection4Card;
      'card.section5-card': CardSection5Card;
      'card.section6-card1': CardSection6Card1;
      'card.section6-card2': CardSection6Card2;
      'card.section7-card': CardSection7Card;
      'card.section8-card': CardSection8Card;
      'contact.contact': ContactContact;
      'contact.contact-field': ContactContactField;
      'navigation.article': NavigationArticle;
      'navigation.column-section': NavigationColumnSection;
      'navigation.menu': NavigationMenu;
      'navigation.menu-item': NavigationMenuItem;
      'navigation.sub-link': NavigationSubLink;
      'navigation.sub-menu-columns': NavigationSubMenuColumns;
      'navigation.sub-menu2': NavigationSubMenu2;
      'navigation.sub-nav-grid': NavigationSubNavGrid;
      'section.section': SectionSection;
      'section.section1': SectionSection1;
      'section.section2': SectionSection2;
      'section.section3': SectionSection3;
      'section.section4': SectionSection4;
      'section.section5': SectionSection5;
      'section.section6': SectionSection6;
      'section.section7': SectionSection7;
      'section.section8': SectionSection8;
      'section.section9': SectionSection9;
      'social.social': SocialSocial;
      'top-bar.top-bar': TopBarTopBar;
    }
  }
}
