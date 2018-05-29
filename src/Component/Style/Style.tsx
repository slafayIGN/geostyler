import * as React from 'react';

import {
  Style as GsStyle,
  Rule as GsRule,
  Symbolizer as GsSymbolizer
} from 'geostyler-style';

import {
  Data as GsData
} from 'geostyler-data';

import { Button } from 'antd';
import Rule from '../Rule/Rule';
import NameField from '../NameField/NameField';

// default props
interface DefaultStyleProps {
  style: GsStyle;
}

// non default props
interface StyleProps extends Partial<DefaultStyleProps> {
  data?: GsData;
  onStyleChange?: (rule: GsStyle) => void;
}

// state
interface StyleState {
  style: GsStyle;
}

class Style extends React.Component<StyleProps, StyleState> {

  public static defaultProps: DefaultStyleProps = {
    style: {
      name: 'My Style',
      type: 'Point',
      rules: []
    }
  };

  static getDerivedStateFromProps(
      nextProps: StyleProps,
      prevState: StyleState): Partial<StyleState> {
    const newState: Partial<StyleState> = {};
    if (nextProps.style) {
      newState.style = nextProps.style;
    }
    return newState;
  }

  /**
   *
   */
  getSymbolizerFromStyleType(style: GsStyle): GsSymbolizer {
    switch (style.type) {
      case 'Point':
        return {
          kind: 'Circle'
        };
      case 'Line':
        return {
          kind: 'Line'
        };
      case 'Fill':
        return {
          kind: 'Fill'
        };
      default:
        return {
          kind: 'Circle'
        };
    }
  }

  onNameChange = (name: string) => {
    const style = this.state.style;
    style.name = name;
    this.setState({style});
    if (this.props.onStyleChange) {
      this.props.onStyleChange(style);
    }
  }

  onRuleChange = (rule: GsRule) => {
    const style = this.state.style;
    // TODO style.rules is allready update. Why?
    if (this.props.onStyleChange) {
      this.props.onStyleChange(style);
    }
  }

  /**
   * Adds another ComparisonFilter to this UI.
   */
  addRule = () => {
    const style = this.state.style;
    // TODO We need to ensure thar rule names are unique
    const randomId = Math.floor(Math.random() * 10000);
    const newRule: GsRule = {
      name: 'rule_' + randomId,
      symbolizer: this.getSymbolizerFromStyleType(style)
    };
    style.rules = [...style.rules, newRule];
    this.setState({style});
  }

  removeRule = (rule: GsRule) => {
    const {
      style
    } = this.state;
    const newRules = style.rules.filter(r => r.name !== rule.name);
    style.rules = newRules;
    this.setState({style});
  }

  render() {
    let rules: GsRule[] = [];
    if (this.state.style) {
      rules = this.state.style.rules;
    }

    return (
      <div>
        <NameField value={this.state.style.name} onChange={this.onNameChange} />
        {rules.map((rule) => <Rule
          key={rule.name}
          rule={rule}
          onRemove={this.removeRule}
          internalDataDef={this.props.data}
          onRuleChange={this.onRuleChange}
        />)}
        <Button
          style={{'marginBottom': '20px', 'marginTop': '20px'}}
          icon="plus"
          size="large"
          onClick={this.addRule}
        >
          Add Rule
        </Button>
      </div>
    );
  }
}

export default Style;
