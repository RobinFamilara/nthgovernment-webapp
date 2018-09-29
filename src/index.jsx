import React from 'react';
import './index.scss';

const SimpleList = props => (
  <div className="simplelist-wrapper">
    <div className="list-header">
      <div className="list-title">
        {props.title}
      </div>
      {
        props.listAction &&
          (<div className="list-action">
            <button> {props.listAction.title} </button>
          </div>)
      }
    </div>
  {
    props.items.map((item, index) => {
      return (
        <div className="list-item" key={item.id} onClick={() => {props.onItemClick(item)}}>
          <div className="list-icon">
            <img src={item.icon} />
          </div>
          <div className="list-content">
            <div className="title-line"> { item.title }</div>
            <div className="subtitle-line"> { item.subtitle }</div>
          </div>
          {
            props.itemActionClick &&
            (<div className="list-action">
              <button onClick={(e) => {
                e.preventDefault();
                e.stopPropagation()
                props.itemActionClick(item)
                }
              }>&times;</button>
            </div>)
          }
        </div>
        );
    })
  }
  </div>
);

SimpleList.defaultProps = {
  items: [],
  title: '',
  onItemClick: () => {},
  itemActionClick: () => {},
}



export default SimpleList;
