import React, {PropTypes, Component} from 'react';

const categoryCardStyle = {
  maxWidth:           '800px',
  maxHeight:          '400px',
  width:              '100%',
  height:             'calc(100vw / 2)',
  padding:            '20px',
  backgroundSize:     'cover',
  backgroundPosition: 'center',
  font:               '24px Helvetica'
};

export default class CategoryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          background: `url("${this.props.data.image_url}")`,
          ...categoryCardStyle,
          color:      `${this.props.data.name_color ? this.props.data.name_color : "white"}`
        }}
        dangerouslySetInnerHTML={{__html: this.props.data.name}}
      >
      </div>
    );
  }
}

// CategoryCard.PropTypes = {
//   btnText: PropTypes.string
// };