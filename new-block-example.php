<?php

/**
 * Plugin Name: New Block Example
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.1.0
 * Author: Salim Serdar Koksal
 *
 * @package new-block-example
 */

defined('ABSPATH') || exit;


define( 'NEWBLOCKEXAMPLE_VERSION', '1.0.0' );
define( 'NEWBLOCKEXAMPLE_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'NEWBLOCKEXAMPLE_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'NEWBLOCKEXAMPLE_PLUGIN_FILE', __FILE__ );
define( 'NEWBLOCKEXAMPLE_PLUGIN_BASE', plugin_basename( __FILE__ ) );

require_once plugin_dir_path( __FILE__ ) . 'includes/get-dynamic-blocks.php';

/**
 * Load all translations for our plugin from the MO file.
*/
add_action('init', 'new_block_example_load_textdomain');

function new_block_example_load_textdomain()
{
    load_plugin_textdomain('new-block-example', false, basename(__DIR__) . '/languages');
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function new_block_example_register_block()
{
    if (! function_exists('register_block_type')) {
        // Gutenberg is not active.
        return;
    }

    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    wp_register_script(
        'new-block-example',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'new-block-example',
        plugins_url('style.css', __FILE__),
        array( ),
        filemtime(plugin_dir_path(__FILE__) . './build/index.css')
    );
}
add_action('init', 'new_block_example_register_block');
