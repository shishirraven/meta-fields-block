/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { CheckboxControl } from '@wordpress/components';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes } ) {
	const { fieldname,isImage } = attributes;

	return (
		<div { ...useBlockProps() }>
		 
			{/* if isImage */}
			{ isImage && <img src={ fieldname } /> }
			{/* if not image */}
			{ !isImage && <span>{"{"}{ fieldname }{"}"}</span> }


			<InspectorControls>
				<PanelBody title={ __( 'Field Settings' ) }>
					<TextControl
						label={ __( 'Field Name' ) }
						value={ fieldname }
						onChange={ ( fieldname ) => setAttributes( { fieldname } ) }
					/>
					<CheckboxControl
						label={ __( 'Is Image' ) }
						checked={ isImage }
						onChange={ ( isImage ) => setAttributes( { isImage } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</div>

	);
}
