#!/usr/bin/env node

import commonLogic from '../src/index.js';
import { rules, getQuestionAndAnswer } from '../src/games/progression-game.js';

commonLogic(rules, getQuestionAndAnswer);
