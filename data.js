function ok() {
    const input = document.querySelector('.input');
    const result = document.querySelector('.result');

    if (input.value == '') {
        alert('Siz hali put tikmdiz')
    } else {
        result.innerHTML = `

        <div class="text-center">
            <p>Are you sure you have ${input.value} dolor</p>
              <a href="#game" ><button class="btn btn-success">Yes</button></a>
            <button type="clear" class="btn btn-danger">No</button>
        </div>

        `
    }
    module.exports = input.value;

}