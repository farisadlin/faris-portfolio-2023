// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // Do nothing
  }

  unobserve() {
    // Do nothing
  }

  disconnect() {
    // Do nothing
  }
}

global.IntersectionObserver = MockIntersectionObserver;

// Mock ResizeObserver
class MockResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // Do nothing
  }

  unobserve() {
    // Do nothing
  }

  disconnect() {
    // Do nothing
  }
}

global.ResizeObserver = MockResizeObserver;

// Mock next/router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: props => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));
