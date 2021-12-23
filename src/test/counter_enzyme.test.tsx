import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "../components/counter";

const sel = (id:string) => `[data-testid="${id}"]`;
Enzyme.configure({ adapter: new Adapter() })

test('子コンポーネントが存在すること', () => {
    const component = mount(<Counter />);
    const number = component.find(sel('count-number'));
    const plusButton = component.find(sel('increment-button'));
    const minusButton = component.find(sel('decrement-button'));

    expect(number.length).toBe(1);
    expect(plusButton.length).toBe(1);
    expect(minusButton.length).toBe(1);
});