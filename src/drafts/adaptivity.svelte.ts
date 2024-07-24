export type AdaptivitySize = 'regular' | 'compact';

const SIZE_X_INITIAL = 'regular';
const SIZE_Y_INITIAL = 'regular';

const QUERY_HAS_POINTER = '(pointer: fine)';
const QUERY_SIZE_X_COMPACT = '(max-width: 767.9px)';
const QUERY_SIZE_X_REGULAR = '(min-width: 768px)';
const QUERY_SIZE_Y_COMPACT = '(max-height: 414.9px), (pointer: fine) and (min-width: 768px)';
const QUERY_SIZE_Y_REGULAR =
  '(max-width: 767.9px) and (min-height: 415px), (pointer: coarse) and (min-height: 415px), (pointer: none) and (min-height: 415px)';

const getSize = (queryCompact: string, queryRegular: string, fallbackValue: AdaptivitySize) => {
  const compact = window.matchMedia(queryCompact).matches;
  const regular = window.matchMedia(queryRegular).matches;
  if (!compact && !regular) {
    return fallbackValue;
  }
  return compact ? 'compact' : 'regular';
};

const createScreenWatcher = (): {
  readonly hasPointer: boolean;
  readonly sizeX: AdaptivitySize;
  readonly sizeY: AdaptivitySize;
} => {
  if (typeof window === 'undefined') {
    return {
      hasPointer: false,
      sizeX: SIZE_X_INITIAL,
      sizeY: SIZE_Y_INITIAL,
    };
  }

  let hasPointer = $state(false);
  let sizeX = $state<AdaptivitySize>(SIZE_X_INITIAL);
  let sizeY = $state<AdaptivitySize>(SIZE_Y_INITIAL);

  const updateValues = () => {
    hasPointer = window.matchMedia(QUERY_HAS_POINTER).matches;
    sizeX = getSize(QUERY_SIZE_X_COMPACT, QUERY_SIZE_X_REGULAR, SIZE_X_INITIAL);
    sizeY = getSize(QUERY_SIZE_Y_COMPACT, QUERY_SIZE_Y_REGULAR, SIZE_Y_INITIAL);

    document.documentElement.dataset.sizeX = sizeX;
    document.documentElement.dataset.sizeY = sizeY;
  };

  window.addEventListener('resize', updateValues);

  return {
    get hasPointer() {
      return hasPointer;
    },
    get sizeX() {
      return sizeX;
    },
    get sizeY() {
      return sizeY;
    },
  };
};

export const screen = createScreenWatcher();
