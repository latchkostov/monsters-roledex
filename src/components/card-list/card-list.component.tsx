import React, { FunctionComponent } from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';
import { Monster } from '../../monster';

type CardListProps = {
    monsters: Monster[]
}

export const CardList: FunctionComponent<CardListProps> = ({monsters}) => {
    return <div className="card-list">
        {
            monsters.map((monster: Monster) => {
              return <Card key={monster.id} monster={monster} />
            })
        }
    </div>
}