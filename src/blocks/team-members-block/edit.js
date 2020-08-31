import {
  RichText,
  AlignmentToolbar,
  BlockControls,
} from "@wordpress/block-editor";

const edit = (props) => {

  const {
    attributes: { content, alignment },
    className,
  } = props;

  const onChangeContent = (newContent) => {
    props.setAttributes({ content: newContent });
  };

  const onChangeAlignment = (newAlignment) => {
    props.setAttributes({
      alignment: newAlignment === undefined ? "none" : newAlignment,
    });
  };

  console.log('content >', content);

  return (
    <div className={className}>
      {
        <BlockControls>
          <AlignmentToolbar value={alignment} onChange={onChangeAlignment} dsds/>
        </BlockControls>
      }
      <RichText
        className={className}
        style={{ textAlign: alignment }}
        tagName="p"
        onChange={onChangeContent}
        value={content}
      />
    </div>
  );
};

export default edit;
