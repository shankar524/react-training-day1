import React from 'react';
import { connect } from 'react-redux';
import { getSuperHeroList } from '../actions/index';
import 'bootstrap/dist/css/bootstrap.min.css';

class SuperHeroList extends React.Component {
    componentDidMount() {
        this.props.dispatch(getSuperHeroList());
    }
    render() {
        console.log(this.props.list);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Hero Name</th>
                    <th>Power</th>
                    <th>Weakness</th>
                    </tr>
                </thead>
                {this.getContent()}
            </table>
        );
    }
    getContent(){
        return (<tbody>
            {
                this.props.list.map((superHero,index) =>{
                    return(
                        <tr key = {index}>
                            <th scope="col">{superHero.name}</th>
                            <td scope="col">{superHero.hero_name}</td>
                            <td scope="col">{superHero.power}</td>
                            <td scope="col">{superHero.weakness}</td>
                        </tr>
                    );
                } )
            }
        </tbody>);
        
    }
}
const mapStateToProps = store => ({
    list: store.list,
});
export default connect(mapStateToProps)(SuperHeroList);