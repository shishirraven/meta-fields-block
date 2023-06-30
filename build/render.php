<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php
	// getting the attribute fieldname
	if (trim($attributes['fieldname']) != "") {
		$key_1_value = get_post_meta(get_the_ID(), $attributes['fieldname'], true);
		// Check if the custom field has a value.
		if (!empty($key_1_value)) {
		//	echo  $key_1_value;

			// if attribute[isImage] is true then show image
			if ($attributes['isImage'] === true) {
				// $image = wp_get_attachment_image_src($key_1_value, 'full');
				echo '<img src="' . esc_url($key_1_value) . '" alt="" />';
			}
			else
			{
				echo $key_1_value;
			}


		} else {
			echo "No value";
		}
	}

	?>
</div>