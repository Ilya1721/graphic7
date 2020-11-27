import React from "react";

class InputData extends React.Component {
  render() {
    const { firstTask, secondTask, thirdTask, fourthTask } = this.props;

    return (
      <div className="input-data">
        <h3>Початкові дані до задачі 1</h3>
        <table>
          <thead>
            <tr>
              <th>Кількість помилок, що виявила перша група тестування</th>
              <th>Кількість помилок, що виявила друга група тестування</th>
              <th>Кількість помилок, що виявлені обома групами тестування</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstTask.n1}</td>
              <td>{firstTask.n2}</td>
              <td>{firstTask.n12}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до задачі 2</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={5}>Імовірність відмови при прогоні</th>
            </tr>
            <tr>
              <th>першому</th>
              <th>другому</th>
              <th>третьому</th>
              <th>четвертому</th>
              <th>п‘ятому</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{secondTask.p1}</td>
              <td>{secondTask.p2}</td>
              <td>{secondTask.p3}</td>
              <td>{secondTask.p4}</td>
              <td>{secondTask.p5}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до задачі 3</h3>
        <table>
          <thead>
            <tr>
              <th>Час створення контрольної точки, годин</th>
              <th>
                Параметр розподілу часу появи відмов, годин<sup>-1</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{thirdTask.c}</td>
              <td>{thirdTask.l}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до задачі 4</h3>
        <table>
          <thead>
            <tr>
              <th>
                Мінімальний час виконання програми для якого доцільне створення
                контрольної точки, годин
              </th>
              <th>Період створення контрольної точки, годин</th>
              <th>
                Параметр розподілу часу появи відмов, годин
                <sup>-1</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{fourthTask.o}</td>
              <td>{fourthTask.c}</td>
              <td>{fourthTask.l}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InputData;
