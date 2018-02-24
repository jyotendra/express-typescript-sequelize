import { Container } from "inversify";
import TYPES from "./types";
import { IModelCreator, TInstance, TAttributes } from "./entities/model-creator.interface";
import { ModelCreator } from "./concrete-classes/model-creator";

const container: Container = new Container();
container.bind<IModelCreator<TInstance, TAttributes>>(TYPES.ModelCreator).to(ModelCreator);

export default container;