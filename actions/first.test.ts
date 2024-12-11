import {
    weWouldNeverDoThisProbably,
    onExecutePostLogin,
} from './first';

test('call a function we would normally never export', () => {
  expect(weWouldNeverDoThisProbably()).toBe('foobar');
});

test('call the thing we would normally want to call', async () => {
    expect(await onExecutePostLogin("example", "example")).toBeUndefined();
});
