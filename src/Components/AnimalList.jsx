import React from 'react';
import styles from "../Styles/list.module.css";

const AnimalList = ({ animals, deleteAnimal }) => {
  return (
    <>
      {animals.length > 0 ? (
        <div className={styles["animal-table-container"]}>
          <table className={styles["animal-table"]}>
            <thead>
              <tr>
                <th className={styles["animal-cell"]}>Name</th>
                <th className={styles["animal-cell"]}>Group</th>
                <th className={styles["animal-cell"]}>Weight</th>
                <th className={styles["animal-cell"]}>Zoo Animal</th>
                <th className={styles["animal-cell"]}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal, index) => (
                <tr key={index}>
                  <td className={styles["animal-cell"]}>{animal.name}</td>
                  <td className={styles["animal-cell"]}>{animal.group}</td>
                  <td className={styles["animal-cell"]}>{animal.weight}</td>
                  <td className={styles["animal-cell"]}>{animal.isZooAnimal ? 'Yes' : 'No'}</td>
                  <td className={styles["animal-cell"]}>
                    <button onClick={() => deleteAnimal(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No animals added yet</p>
      )}
    </>
  );
};

export default AnimalList;
