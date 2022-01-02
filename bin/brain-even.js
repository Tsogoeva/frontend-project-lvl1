#!/usr/bin/env node

import commonLogic from '../src/index.js';
import { rules, getQuestionAndAnswer } from '../src/games/even-game.js';

commonLogic(rules, getQuestionAndAnswer);
