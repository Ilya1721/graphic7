import React from "react";

class OutputData extends React.Component {
  calculate = () => {
    return {
      firstTask: this.calcFirst(),
      secondTask: this.calcSecond(),
      thirdTask: this.calcThird(),
      fourthTask: this.calcFourth(),
    };
  };

  calcFirst = () => {
    const { n1, n2, n12 } = this.props.firstTask;
    const e1 = n12 / n2;
    const e2 = n12 / n1;
    const n = n12 / (e1 * e2);

    return {
      n,
    };
  };

  calcSecond = () => {
    const { exp, log } = Math;
    const { p1, p2, p3, p4, p5 } = this.props.secondTask;
    const arr = [p1, p2, p3, p4, p5];
    const arr2 = [...arr, p5 - 0.05];

    let sum = 0;
    arr.forEach((p) => {
      sum += log(1 - p);
    });
    const pp1 = exp(sum);
    sum = 0;
    arr2.forEach((p) => {
      sum += log(1 - p);
    });
    const pp2 = exp(sum);

    return {
      pp1,
      pp2,
    };
  };

  calcThird = () => {
    const { sqrt } = Math;
    const { c, l } = this.props.thirdTask;
    const t = sqrt((2 * c) / l) - c;

    return {
      t,
    };
  };

  calcFourth = () => {
    const { sqrt } = Math;
    const { o, c, l } = this.props.fourthTask;
    const t = sqrt((2 * c) / l) - c;
    const floatIsRight = (2 * t) / (1 - l * t);
    const boolIsRight = o >= floatIsRight;
    let msg = "";
    if (boolIsRight) {
      msg = "Створення КТ є доцільним";
    } else {
      msg = "Створення КТ не є доцільним";
    }

    return {
      msg,
    };
  };

  render() {
    const { firstTask, secondTask, thirdTask, fourthTask } = this.calculate();

    return (
      <div className="output-data">
        <h3>Завдання 1</h3>
        <table>
          <thead>
            <tr>
              <th>Загальна кількість помилок ПЗ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstTask.n.toFixed(0)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 2</h3>
        <table>
          <thead>
            <tr>
              <th>
                Імовірность того, що в послідовності з 5 прогонів програми жоден
                з них не завершиться відмовою.
              </th>
              <th>
                Імовірность того, що в послідовності з 6 прогонів програми жоден
                з них не завершиться відмовою.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{secondTask.pp1.toFixed(4)}</td>
              <td>{secondTask.pp2.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 3</h3>
        <table>
          <thead>
            <tr>
              <th>
                Оптимальний інтервал створення контрольної точки по критерію
                мінімуму середнього часу виконання програми
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{thirdTask.t.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 4</h3>
        <table>
          <thead>
            <tr>
              <th>Доцільність створення контрольної точки</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{fourthTask.msg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OutputData;
