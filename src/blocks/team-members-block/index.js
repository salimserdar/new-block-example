/**
 * BLOCK: multi-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import {
  RichText,
  AlignmentToolbar,
  BlockControls,
} from "@wordpress/block-editor";

import edit from "./edit";
import save from "./save";

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("new-block-example/team-member-block", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("Team Member", "CGB"), // Block title.
  icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  parent: [ 'new-block-example/team-members-block' ],
  keywords: [__("Team Member")],

  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },

  // The "edit" property must be a valid function.
  edit,

  // The "save" property must be specified and must be a valid function.
  save,
});
