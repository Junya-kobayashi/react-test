import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Counter from "../components/counter"

afterEach(cleanup);

// const sel = (id:string) => `[data-testid="${id}"]`


it('counter test on text', () => {
    const {queryByTestId, getByTestId} = render(
      <Counter />,
    );
  
    expect(queryByTestId(/count-number/i)?.textContent).toBe("0");
    fireEvent.click(getByTestId(/increment/i));
    expect(queryByTestId(/count-number/i)?.textContent).toBe("1");

  });

// 表示されているものが数値である

// +ボタンを一回押したときに +1 される

// -ボタンを一回押したときに -1 される
