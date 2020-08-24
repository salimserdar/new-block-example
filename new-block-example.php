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

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'new_block_example_load_textdomain' );

function new_block_example_load_textdomain() {
	load_plugin_textdomain( 'new-block-example', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function new_block_example_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'new-block-example',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

	wp_register_style(
		'new-block-example',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . './build/index.css' )
	);

	register_block_type( 'new-block-example/posts-per-category', array(
		'style' => 'new-block-example',
    'editor_script' => 'new-block-example',
    'render_callback' => 'new_block_example_posts_per_category'
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'new-block-example', 'new-block-example' );
  }

  function new_block_example_posts_per_category( $attributes ) {
    // echo '<pre>';
    // print_r($attributes["selectedCategory"]);
    // echo '</pre>';
    // die();

    // echo $attributes["selectedCategory"];

    $posts = get_posts([
      'category' =>  $attributes["selectedCategory"]
    ]);

    ob_start();

    foreach ($posts as $key => $post) {
      # code...
      echo '<h2>'.$post->post_title.'</h2>';
    }

    return ob_get_clean();
  }

}
add_action( 'init', 'new_block_example_register_block' );