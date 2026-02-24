module.exports = {
    // a. Verifica se o array está vazio
    isEmpty: function(array){
        return array.length === 0;
    },

    // b. Devolve o máximo do array
    max: function(array){
        if(array.length === 0) return undefined;
        let max = array[0];
        for(let i = 1; i < array.length; i++){
            if(array[i] > max){
                max = array[i];
            }
        }
        return max;
    },

    // c. Devolve o mínimo do array
    min: function(array){
        if(array.length === 0) return undefined;
        let min = array[0];
        for(let i = 1; i < array.length; i++){
            if(array[i] < min){
                min = array[i];
            }
        }
        return min;
    },

    // d. Devolve a média do array
    average: function(array){
        if(array.length === 0) return undefined;
        let soma = 0;
        for(let i = 0; i < array.length; i++){
            soma += array[i];
        }
        return soma / array.length;
    },

    // e. Devolve o índice de um valor no array
    indexOf: function(array, value){
        for(let i = 0; i < array.length; i++){
            if(array[i] === value){
                return i;
            }
        }
        return -1;
    },

    // f. Devolve um sub-array
    subArray: function(array, startIndex, endIndex){
        let novo = [];
        for(let i = startIndex; i <= endIndex && i < array.length; i++){
            novo.push(array[i]);
        }
        return novo;
    },

    // g. Compara o tamanho de dois arrays
    isSameLength: function(a1, a2){
        return a1.length === a2.length;
    },

    // h. Inverte a ordem do array
    reverse: function(array){
        let novo = [];
        for(let i = array.length - 1; i >= 0; i--){
            novo.push(array[i]);
        }
        return novo;
    },

    // i. Troca dois elementos do array
    swap: function(array, index1, index2){
        let novo = array.slice(); // copia para não alterar o original
        let temp = novo[index1];
        novo[index1] = novo[index2];
        novo[index2] = temp;
        return novo;
    },

    // j. Verifica se o array contém um valor
    contains: function(array, value){
        // Podes usar indexOf aqui 😉
        return this.indexOf(array, value) !== -1;
    },

    // k. Junta dois arrays
    concatenate: function(a1, a2){
        let novo = [];
        for(let i = 0; i < a1.length; i++){
            novo.push(a1[i]);
        }
        for(let i = 0; i < a2.length; i++){
            novo.push(a2[i]);
        }
        return novo;
    }
};
