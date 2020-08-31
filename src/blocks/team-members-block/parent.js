import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

import { __ } from "@wordpress/i18n";

registerBlockType("new-block-example/team-members-block", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Team Members", "CGB"), // Block title.
  icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("Team Members")],

  edit: ({ className }) => {
    return (
      <div className={className}>
        <InnerBlocks allowedBlocks={["new-block-example/team-member-block"]} />
      </div>
    );
  },

  save: ({ className }) => {
    return (
      <div className={className}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
