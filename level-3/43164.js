function solution(tickets) {
  const result = []; // 렉시컬

  dfs("ICN", tickets, []); // 경로가 존재하지 않을 수 있으므로 모든 경로를 구해야한다.

  return result.sort()[0];

  function dfs(start, tickets, path) {
    if (!tickets.length) {
      result.push([...path, start]);

      return;
    }

    for (let i = 0; i < tickets.length; i += 1) {
      const [from, to] = tickets[i];

      if (start === from) {
        const newTickets = tickets.filter((_, j) => i !== j);

        dfs(to, newTickets, [...path, start]); // 사본을 전달한다
      }
    }
  }
}

// function solution(tickets) {
//   tickets.sort((a, b) => (a[1] < b[1] ? -1 : a[1] === b[1] ? 0 : 1));

//   let result = ["ICN"];

//   while (tickets.length) {
//     const current = result[result.length - 1];

//     for (let i = 0; i < tickets.length; i += 1) {
//       let [from, to] = tickets[i];

//       if (current === from) {
//         result.push(to);

//         tickets.splice(i, 1);

//         break;
//       }
//     }
//   }

//   return result;
// }

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
