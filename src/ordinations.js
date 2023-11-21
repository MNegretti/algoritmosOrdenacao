main();
function main() {
  console.log("Início: ");
  let opcao = 3
  let ordenacao = 3; // 1 = sequencial, 2 = inverso, 3 = aleatório
  let vetor = [];
  switch (opcao) {
    case 1:
      vetor = definirTamanhos(1000, ordenacao);
      break;
    case 2:
      vetor = definirTamanhos(10000, ordenacao);
      break;
    case 3:
      vetor = definirTamanhos(100000, ordenacao);
      break;
    default:
      console.log("Opcao invalida.");
  }
  let newVetor = [];
  let startDate = new Date();
  let endDate = new Date();
  let timeElapsed = 0;

  console.log("\nBubble Sort: ");
  startDate = new Date();
  newVetor = bubbleSortWithStats(vetor);
  endDate = new Date();
  timeElapsed = endDate - startDate;
  console.log("Tempo decorrido: " + timeElapsed + " msec");

  console.log("\nImproved Bubble Sort: ");
  startDate = new Date();
  newVetor = improvedBubbleSortWithStats(vetor);
  endDate = new Date();
  timeElapsed = endDate - startDate;
  console.log("Tempo decorrido: " + timeElapsed + " msec");

  console.log("\nInsertion Sort: ");
  startDate = new Date();
  newVetor = insertionSortWithStats(vetor);
  endDate = new Date();
  timeElapsed = endDate - startDate;
  console.log("Tempo decorrido: " + timeElapsed + " msec");

  console.log("\nSelection Sort: ");
  startDate = new Date();
  newVetor = selectionSortWithStats(vetor);
  endDate = new Date();
  timeElapsed = endDate - startDate;
  console.log("Tempo decorrido: " + timeElapsed + " msec");

  console.log("\nMerge Sort: ");
  startDate = new Date();
  newVetor = mergeSortWithStats(vetor);
  endDate = new Date();
  timeElapsed = endDate - startDate;
  console.log("Tempo decorrido: " + timeElapsed + " msec");

  console.log("\nQuickSort: ");
  startDate = new Date();
  newVetor = quickSortWithStats(vetor);
  endDate = new Date();
  timeElapsed = endDate - startDate;
  console.log("Tempo decorrido: " + timeElapsed + " msec");

  console.log("\nHeap Sort: ");
  startDate = new Date();
  newVetor = heapSortWithStats(vetor);
  endDate = new Date();
  timeElapsed = endDate - startDate;
  console.log("Tempo decorrido: " + timeElapsed + " msec");
}
function definirTamanhos(tamanho, ordenacao) {
  let vetor = [];
  console.log("Entrada: " + tamanho);
  switch (ordenacao) {
    case 1:
      vetor = gerarValoresSequenciais(tamanho);
      console.log("Melhor Caso");
      break;
    case 2:
      vetor = gerarValoresSequenciais(tamanho).reverse();
      console.log("Pior Caso");
      break;
    case 3:
      vetor = gerarValoresAleatorios(tamanho);
      console.log("Aleatório");
      break;
    default:
      console.log("Opcao de ordenacao incial invalida.");
  }
  return vetor;
}
function gerarValoresSequenciais(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor[i] = i;
  }
  return vetor;
}
function gerarValoresAleatorios(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor[i] = Math.floor(Math.random() * tamanho);
  }
  return vetor;
}
function bubbleSortWithStats(vetor) {
  const arr = [...vetor];
  let comparisons = 0;
  let swaps = 0;
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      comparisons++; // Increment comparison count for each comparison made
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;
      }
    }
  }
  console.log('Comparações: '+comparisons);
  console.log('Trocas: '+swaps);
  return arr;
}
function improvedBubbleSortWithStats(vetor) {
  const arr = [...vetor];
  let comparisons = 0;
  let swaps = 0;
  const length = arr.length;
  let swapped;
  for (let i = 0; i < length - 1; i++) {
    swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      comparisons++; // Increment comparison count for each comparison made
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;
        swapped = true;
      }
    }
    // If no swaps occurred in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }
  console.log('Comparações: '+comparisons);
  console.log('Trocas: '+swaps);
  return arr;
}
function insertionSortWithStats(vetor) {
  const arr = [...vetor];
  let comparisons = 0;
  let swaps = 0;
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      comparisons++; // Increment comparison count for each comparison made

      arr[j + 1] = arr[j];
      swaps++; // Increment swap count for each swap made
      j--;
    }
    arr[j + 1] = current;
  }
  console.log('Comparações: '+comparisons);
  console.log('Trocas: '+swaps);
  return arr;
}
function selectionSortWithStats(vetor) {
  const arr = [...vetor];
  let comparisons = 0;
  let swaps = 0;
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      comparisons++; // Increment comparison count for each comparison made

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
      swaps++; // Increment swap count for each swap made
    }
  }
  console.log('Comparações: '+comparisons);
  console.log('Trocas: '+swaps);
  return arr;
}
function mergeSortWithStats(vetor) {
  const arr = [...vetor];
  let comparisons = 0;
  let swaps = 0;
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      comparisons++; // Increment comparison count for each comparison made
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
      swaps++; // Increment position trades for each element added to result
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }
  const sortedArray = mergeSort(arr);
  console.log('Comparações: '+comparisons);
  console.log('Trocas: '+swaps);
  return sortedArray;
}
function quickSortWithStats(vetor) {
  const arr = [...vetor];
  let comparisons = 0;
  let swaps = 0;
  function partition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];
    let i = low;
    let j = high;
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
        comparisons++; // Increment comparison count for each comparison made
      }
      while (arr[j] > pivot) {
        j--;
        comparisons++; // Increment comparison count for each comparison made
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        swaps++; // Increment position trades for each swap made
        i++;
        j--;
      }
    }
    return i;
  }
  function quickSort(arr, low, high) {
    if (arr.length > 1) {
      const index = partition(arr, low, high);

      if (low < index - 1) {
        quickSort(arr, low, index - 1);
      }
      if (index < high) {
        quickSort(arr, index, high);
      }
    }
  }
  quickSort(arr, 0, arr.length - 1);
  console.log('Comparações: '+comparisons);
  console.log('Trocas: '+swaps);
  return arr;
}
function heapSortWithStats(vetor) {
  const arr = [...vetor];
  let comparisons = 0;
  let swaps = 0;
  // Build max heap
  function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }
  // Heapify a subtree rooted with node i which is an index in arr[]
  function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    comparisons += 2; // Increment comparison count for the if conditions
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap elements
      swaps++;
      heapify(arr, n, largest);
    }
  }
  // Build max heap from the array
  buildMaxHeap(arr);
  // Extract elements from heap one by one
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
    swaps++;

    heapify(arr, i, 0); // call max heapify on the reduced heap
  }
  console.log('Comparações: '+comparisons);
  console.log('Trocas: '+swaps);
  return arr;
}
