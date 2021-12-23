
import { cleanup, fireEvent, render } from "@testing-library/react";
import Counter, {plusOne} from "../components/counter"

afterEach(cleanup);

test("plusOneのテスト", () => {
  expect(plusOne(1)).toBe(2);
  expect(plusOne(10)).toBe(10);
}) 


it('+ボタン, -ボタンが表示されているかのテスト', ()=> {
  const {queryByTestId, getByTestId} = render(
    <Counter />,
  );
  expect(queryByTestId(/increment-button/)?.textContent).toBe("+");
  expect(queryByTestId(/decrement-button/)?.textContent).toBe("-");

})

it('デフォルト値が0になるかどうか', () => {
  const {queryByTestId, getByTestId} = render(
    <Counter />,
  );
  /** incrementが呼ばれているかのテスト */
  const countNumberStr :string | null | undefined = queryByTestId(/count-number/i)?.textContent
  expect(countNumberStr).not.toBeNull();
  expect(countNumberStr).not.toBeUndefined();
  expect(queryByTestId(/count-number/i)?.textContent).toBe(String(0));
});

it('値が10になるときにテストの値が10になるかどうか', () => {
  const {queryByTestId, getByTestId} = render(
    <Counter />,
  );
  /** incrementが呼ばれているかのテスト */
  const countNumberStr :string | null | undefined = queryByTestId(/count-number/i)?.textContent
  expect(countNumberStr).not.toBeNull();
  expect(countNumberStr).not.toBeUndefined();
  for(var i = 0; i < 10; i++) {
    fireEvent.click(getByTestId(/increment-button/i));
  }
  expect(queryByTestId(/count-number/i)?.textContent).toBe(String(10));
});

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
  console.log(queryByTestId(/count-number/i)?.textContent);
  expect(queryByTestId(/count-number/i)?.textContent).toBe(String(countNumber+ 1));

});


// 表示されているものが数値である

// +ボタンを一回押したときに +1 される

// -ボタンを一回押したときに -1 される
