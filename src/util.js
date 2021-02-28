export function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function swapElem(elems,i,j) {
  var tmp = elems[i];
  elems[i] = elems[j];
  elems[j] = tmp;
};

export function heapsPermutation(elems) {
  //heap's algorithm
  var perms = [];
  var N = elems.length;
  var c = new Array(N).fill(0,0,N);
  perms.push([...elems]);
  for (let i = 0; i < N; null) {
    if(c[i] < i) {
      if(i%2==0) {
        swapElem(elems,N-1,N-1-i);
      } else {
        swapElem(elems,N-1-c[i],N-1-i);
      }
      perms.push([...elems]);
      ++c[i];
      i = 0;
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return perms;
}

export function countdownQuickPerm(elems) {
  // countdown quickperm
  var perms = [];
  var N = elems.length;
  var p = Array.from({length: N+1}, (_,i) => i);
  perms.push([...elems]);
  for (let i = 1; i < N; null) {
    --p[i];
    if(i%2) { //odd
      swapElem(elems,N-1-p[i],N-1-i);
    } else { // even
      swapElem(elems,N-1,N-1-i);
    }
    console.log(i,p);
    perms.push([...elems]);
    i = 1;
    while(!p[i]) {
      p[i] = i++;
    }
  }
  return perms;
}

export function recursivePerm(elems) {
  if(elems.length == 1) {
    return [elems];
  }
  var perms = [];
  for (let i = 0; i < elems.length; ++i) {
    var new_perms = [];
    for (let j = 0; j < elems.length; ++j) {
      if(i!=j)
      new_perms.push(elems[j]);
    }
    new_perms = recursivePerm(new_perms);
    for (const new_perm of new_perms) {
      new_perm.unshift(elems[i]);
      perms.push(new_perm);
    }
  }
  return perms;
}

export function paretoRating(elements, scoreFunc = (e) => e, start_ratio = 0.6) {
  var score = 0;
  var prev_score = 0;
  var ratio = start_ratio;
  for (const element of elements) {
    var new_score = scoreFunc(element);
    score += ratio * (new_score - prev_score);
    prev_score = new_score;
    ratio *= (1 - start_ratio);
  }
  score += ratio;
  return score;
}
