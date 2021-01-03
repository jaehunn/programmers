function solution(n, m) {
  let _n = n;
  let _m = m;

  while (_n && _m && _n !== _m) {
    [_n, _m] = _n > _m ? [_n - _m, _m] : [_n, _m - _n];
  }

  return [_n || _m, (n * m) / (_n || _m)];
}
