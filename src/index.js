import "./blocks/team-members-block/parent";
import "./blocks/post-grid-block";
import "./blocks/post-grid-block";

/**
 * WordPress dependencies
 */

const { registerBlockType } = wp.blocks;

// Category slug and title
const category = {
  slug: "new-block-example",
  title: "New Blocks Example",
};

import * as card from "./blocks/card";
import * as postGridBlock from "./blocks/post-grid-block";

export function registerNewExampleBlocks() {
  [card, postGridBlock].forEach((block) => {
    if (!block) {
      return;
    }

    const { name, icon, settings } = block;

    registerBlockType(`new-block-example/${name}`, {
      category: category.slug,
      icon: { src: icon },
      ...settings,
    });
  });
}
registerNewExampleBlocks();
