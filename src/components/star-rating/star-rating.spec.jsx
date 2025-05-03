import * as React from 'react';
import { shallow} from 'enzyme';
import StarRating from './star-rating';
describe('Star Rating ', () => {
    
    it('should render correctly', () => { 
      const wrapper = shallow(<StarRating  rating="3" />)
      expect(wrapper).toBeDefined();
    });
  });