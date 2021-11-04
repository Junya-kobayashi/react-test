import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Counter from "../components/counter"

afterEach(cleanup);

// const sel = (id:string) => `[data-testid="${id}"]`

it('+ボタン, -ボタンが表示されているかのテスト', ()=> {
  const {queryByTestId, getByTestId} = render(
    <Counter />,
  );


  expect(queryByTestId(/increment-button/)?.textContent).toBe("+");
  expect(queryByTestId(/decrement-button/)?.textContent).toBe("-");

})


it('+ボタンをクリックしたら+1された数字が表示されるか', () => {
    const {queryByTestId, getByTestId} = render(
      <Counter />,
    );
    /** incrementが呼ばれているかのテスト */
    const countNumberStr :string | null | undefined = queryByTestId(/count-number/i)?.textContent
    expect(countNumberStr).not.toBeNull();
    expect(countNumberStr).not.toBeUndefined();

    const countNumber : number = Number(countNumberStr)
    fireEvent.click(getByTestId(/increment/i));
    expect(queryByTestId(/count-number/i)?.textContent).toBe(String(countNumber+ 1));

  });

// 表示されているものが数値である

// +ボタンを一回押したときに +1 される

// -ボタンを一回押したときに -1 される
