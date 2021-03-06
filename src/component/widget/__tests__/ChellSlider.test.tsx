import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import * as React from 'react';

import Slider from 'rc-slider';
import ChellSlider, { IChellSliderProps } from '../ChellSlider';

describe('ChellSlider', () => {
  const sampleChellSlider = (props: Partial<IChellSliderProps> = {}) => (
    <ChellSlider value={1} max={100} min={1} label={'test'} {...props} />
  );
  it('Should match existing snapshot when given simple data.', () => {
    const wrapper = shallow(sampleChellSlider());
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should handle onChange callbacks.', () => {
    const onChangeSpy = jest.fn();
    const expected = 42;
    const wrapper = shallow(sampleChellSlider({ onChange: onChangeSpy }));

    expect(wrapper.state().value).not.toBe(expected);
    wrapper.find(Slider).simulate('change', expected);
    expect(onChangeSpy).toHaveBeenLastCalledWith(expected);
    expect(wrapper.state().value).toBe(expected);
  });

  it('Should handle onAfterChange callbacks.', () => {
    const onAfterChangeSpy = jest.fn();
    const expected = 42;
    const wrapper = shallow(sampleChellSlider({ onAfterChange: onAfterChangeSpy }));

    expect(wrapper.state().value).not.toBe(expected);
    wrapper.find(Slider).simulate('afterChange', expected);
    expect(onAfterChangeSpy).toHaveBeenLastCalledWith(expected);
    expect(wrapper.state().value).toBe(expected);
  });
});
