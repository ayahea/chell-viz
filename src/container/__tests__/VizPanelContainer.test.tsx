import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import * as React from 'react';

import { VIZ_TYPE } from '../../data/chell-data';
import { fetchAppropriateData } from '../../helper/DataHelper';
import VizPanelContainer, { VizPanelContainerClass } from '../VizPanelContainer';

describe('VizPanelContainer', () => {
  beforeEach(() => {
    // TODO Use mock file to abstract this.
    (fetchAppropriateData as any) = jest.fn(
      (viz: VIZ_TYPE, dataDir: string) => `Dummy data for viz '${viz}' in '${dataDir}' directory.`,
    );
  });

  it('Should match existing snapshot when given a single visualization panel to render.', async () => {
    const wrapper = await shallow(
      <VizPanelContainer dataDirs={[]} initialVisualizations={[]} numPanels={1} supportedVisualizations={[]} />,
    ).update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should match existing snapshot when given multiple visualizations to render.', () => {
    const visualizations = [VIZ_TYPE.CONTACT_MAP, VIZ_TYPE.NGL];

    expect(
      toJson(
        shallow(
          <VizPanelContainer
            dataDirs={['first', 'second']}
            initialVisualizations={visualizations}
            numPanels={2}
            supportedVisualizations={visualizations}
          />,
        ),
      ),
    ).toMatchSnapshot();
  });

  it('Should fetch new data when selected directory changes.', async () => {
    const visualizations = [VIZ_TYPE.CONTACT_MAP];
    const wrapper = shallow(
      <VizPanelContainer
        dataDirs={['first', 'second']}
        initialVisualizations={visualizations}
        numPanels={1}
        supportedVisualizations={visualizations}
      />,
    );

    const instance = wrapper.instance() as VizPanelContainerClass;
    const initialData = instance.state.data;
    wrapper.setState({
      currentDataDir: 'second',
    });
    await wrapper.update();

    expect(instance.state.data).not.toBe(initialData);
  });

  it('Should not fetch new data if selected directory is the same.', async () => {
    const visualizations = [VIZ_TYPE.CONTACT_MAP];
    const wrapper = await shallow(
      <VizPanelContainer
        dataDirs={['first', 'second']}
        initialVisualizations={visualizations}
        numPanels={1}
        supportedVisualizations={visualizations}
      />,
    ).update();

    const instance = wrapper.instance() as VizPanelContainerClass;
    const initialData = instance.state.data;
    wrapper.setState({
      currentDataDir: 'first',
    });
    await wrapper.update();

    expect(instance.state.data).toBe(initialData);
  });

  it('Should update the state when the directory dropdown changes.', async () => {
    const wrapper = await shallow(
      <VizPanelContainer
        dataDirs={['first', 'second']}
        initialVisualizations={[]}
        numPanels={1}
        supportedVisualizations={[]}
      />,
    );
    const expected = 'second';
    wrapper.find('.viz-panel-container-dropdown').simulate('change', {}, { value: expected });
    const instance = wrapper.instance() as VizPanelContainerClass;
    expect(instance.state.currentDataDir).toBe(expected);
  });
});
