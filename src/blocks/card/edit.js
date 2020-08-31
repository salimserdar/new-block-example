/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
	InspectorControls,
	PanelColorSettings,
	InnerBlocks,
} = wp.blockEditor;

const {
	PanelBody,
	SelectControl,
	RangeControl,
} = wp.components;

/**
 * Block edit function
 */
class CardEdit extends Component {

	constructor() {
		super(...arguments);
	}

	render() {
		const {
			attributes,
			className,
			setAttributes,
		} = this.props;

		const {
			align,
			backgroundColor,
			borderColor,
			backgroundRadius,
			shadowName,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
		} = attributes;

		const shadowNameOptions = [
			{ value: "shadow-none", label: __('none', 'new-block-example') },
			{ value: "shadow-a", label   : __('small', 'new-block-example') },
			{ value: "shadow-b", label   : __('large', 'new-block-example') }
		];

		const MIN_BORDER_RADIUS_VALUE = 0;
		const MAX_BORDER_RADIUS_VALUE = 50;
		const INITIAL_BORDER_RADIUS_POSITION = 0;

		const classes = classnames(classnames, shadowName, align, {
			'has-background'        : backgroundColor,
			'has-border'            : borderColor,
			[`pt__${paddingTop}`]   : paddingTop,
			[`pb__${paddingBottom}`]: paddingBottom,
			[`pl__${paddingLeft}`]  : paddingLeft,
			[`pr__${paddingRight}`] : paddingRight,
		});

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Card Settings', 'new-block-example')}>
						<SelectControl
							label={__("Shadow", "new-block-example")}
							value={shadowName}
							options={shadowNameOptions}
							onChange={shadowName => setAttributes({ shadowName })}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__('Color Settings', 'new-block-example')}
						initialOpen={false}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: backgroundColor => {
									setAttributes({ backgroundColor });
								},
								label: __('Background Color', 'new-block-example'),
							},
							{
								value: borderColor,
								onChange: borderColor => {
									setAttributes({ borderColor });
								},
								label: __('Border Color', 'new-block-example'),
							},
						]}
					>
					</PanelColorSettings>
					<PanelBody
						title={__('Spacing', 'new-block-example')}
						initialOpen={false}
					>
						<RangeControl
							label={__('Padding Top', 'new-block-example')}
							value={paddingTop}
							onChange={(paddingTop) => setAttributes({ paddingTop })}
							initialPosition={3}
							min={0}
							max={19}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Bottom', 'new-block-example')}
							value={paddingBottom}
							onChange={(paddingBottom) => setAttributes({ paddingBottom })}
							initialPosition={3}
							min={0}
							max={19}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Left', 'new-block-example')}
							value={paddingLeft}
							onChange={(paddingLeft) => setAttributes({ paddingLeft })}
							initialPosition={3}
							min={0}
							max={19}
							allowReset={true}
						/>
						<RangeControl
							label={__('Padding Right', 'new-block-example')}
							value={paddingRight}
							onChange={(paddingRight) => setAttributes({ paddingRight })}
							initialPosition={3}
							min={0}
							max={19}
							allowReset={true}
						/>
					</PanelBody>
					<PanelBody
						title={__('Border', 'new-block-example')}
						initialOpen={false}
					>
						<RangeControl
							label={__('Border Radius', 'new-block-example')}
							value={backgroundRadius}
							min={MIN_BORDER_RADIUS_VALUE}
							max={MAX_BORDER_RADIUS_VALUE}
							initialPosition={INITIAL_BORDER_RADIUS_POSITION}
							allowReset
							onChange={backgroundRadius => setAttributes({ backgroundRadius })}
						/>
					</PanelBody>
				</InspectorControls>

				<div
					className={classnames(className, shadowName, align, {
						'has-background': backgroundColor,
						'has-border': borderColor,
						[`pt__${paddingTop}`]: paddingTop,
						[`pb__${paddingBottom}`]: paddingBottom,
						[`pl__${paddingLeft}`]: paddingLeft,
						[`pr__${paddingRight}`]: paddingRight,
					})}
					style={{
						backgroundColor: backgroundColor,
						borderColor: borderColor,
						borderRadius: backgroundRadius,
					}}>
					<InnerBlocks />
				</div>
			</Fragment>
		);
	}
}
export default CardEdit;
