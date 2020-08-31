<?php

/**
 * Register Post Grid Block
 *
 */

function new_block_example_posts_per_category($attributes)
{

    $posts = get_posts(['category' =>  $attributes["selectedCategory"]]);

    ob_start();

    foreach ($posts as $key => $post) {
        # code...
        echo '<h2>' . $post->post_title . '</h2>';
    }

    return ob_get_clean();
}

function post_grid_block_register_block()
{
    register_block_type('new-block-example/posts-per-category', array(
        'style' => 'new-block-example',
        'editor_script' => 'new-block-example',
        'render_callback' => 'new_block_example_posts_per_category'
    ));
}
add_action('init', 'post_grid_block_register_block');
